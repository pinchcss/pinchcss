const fs = require('node:fs/promises');
const path = require('node:path');
const { promisify } = require('node:util');
const { gzip } = require('node:zlib');
const sass = require('sass');
const browserslist = require('browserslist');
const { transform, browserslistToTargets } = require('lightningcss');

let input = [];
let result = {};
const cwd = path.resolve(__dirname, '..');
const targets = browserslistToTargets(browserslist());
const compress = promisify(gzip);
const numberFormatter = new Intl.NumberFormat('en', {
	maximumFractionDigits: 2,
	minimumFractionDigits: 2,
});

function displaySize(bytes) {
	return `${numberFormatter.format(bytes / 1000)}kB`;
}

async function getCompressedSize(code) {
	const compressed = await compress(typeof code === 'string' ? code : Buffer.from(code));
	return compressed.length;
}

async function writeFile(filename, input) {
	try {
		const css = await Promise.resolve(input);
		fs.writeFile(filename, css);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
}

async function logSize(input, prefix) {
	let log = `${prefix} \t`;
	log += displaySize(input.length);
	log += '\t gzip: ';
	log += displaySize(await getCompressedSize(input));
	console.log(log);
}

async function compileCss() {
	const t0 = performance.now();
	input.map((filename) => {
		try {
			const resp = sass.compile(`${cwd}/${filename}.scss`, {
				loadPaths: [`${cwd}/node_modules`],
			});
			result[filename] = resp;
		} catch (err) {
			console.error(err);
			process.exit(1);
		}
	});
	for (let file in result) {
		const css = result[file].css;
		const old = await fs.readFile(`${file}.min.css`);
		console.log(`[${file}.min.css] =====`);
		await logSize(old, 'old:');
		try {
			const { code } = transform({
				// filename: `${file}.min.css`,
				code: Buffer.from(css),
				targets,
				minify: true,
				sourceMap: false,
			});
			await logSize(code, 'new:');
			writeFile(`${file}.min.css`, code);
			writeFile(`${file}.css`, css);
			console.log('');
		} catch (err) {
			console.error(err);
			process.exit(1);
		}
	}
	const t1 = performance.now();
	console.log(`"compileCss" done in ${(t1 - t0).toFixed(2)} milliseconds.`);
}

async function start() {
	input = (await fs.readdir(`${__dirname}/..`))
		.filter((file) => path.extname(file).toLowerCase() === '.scss' && path.basename(file)[0] !== '_')
		.map((file) => path.basename(file, '.scss'));

	compileCss();
}

try {
	start();
} catch (err) {
	console.error(err);
	process.exit(1);
}
