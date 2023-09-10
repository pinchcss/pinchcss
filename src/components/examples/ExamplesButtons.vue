<script setup>
const colors = {
	default: 'Default',
	primary: 'Primary',
	info: 'Info',
	success: 'Success',
	warning: 'Warning',
	danger: 'Danger',
};
</script>

<template>
	<section>
		<p>
			<template v-for="(title, key) in colors" :key="key">
				<button ontouchstart :class="key === 'default' ? '' : key">{{ title }}</button>
				{{ '&#32;' }}
			</template>
		</p>

		<p>
			<template v-for="(title, key) in colors" :key="key">
				<button disabled :class="key === 'default' ? '' : key">{{ key === 'default' ? 'Disabled' : title }}</button>
				{{ '&#32;' }}
			</template>
		</p>

		<p>
			<template v-for="(title, key, i) in colors" :key="key">
				<input :type="i % 2 === 0 ? 'submit' : 'button'" :class="key === 'default' ? '' : key" :value="title" />
				{{ '&#32;' }}
			</template>
		</p>

		<p>
			<template v-for="(title, key) in colors" :key="key">
				<button class="outlined" :class="key === 'default' ? '' : key">
					{{ key === 'default' ? 'Outlined' : title }}
				</button>
				{{ '&#32;' }}
			</template>
		</p>

		<p>
			<template v-for="(title, key) in colors" :key="key">
				<button class="outlined" disabled :class="key === 'default' ? '' : key">
					{{ key === 'default' ? 'Outlined' : title }}
				</button>
				{{ '&#32;' }}
			</template>
		</p>

		<p class="box inverted">
			<button class="inverted">Inverted</button>{{ '&#32;' }}
			<button class="inverted outlined">Outlined</button>{{ '&#32;' }}
			<a @click.prevent class="button inverted" href="#">Inverted</a>{{ '&#32;' }}
			<a @click.prevent class="button inverted outlined" href="#">Outlined</a>{{ '&#32;' }}
			<button class="inverted" disabled>Inverted</button>{{ '&#32;' }}
			<a class="button inverted outlined" href="#" disabled>Outlined</a>{{ '&#32;' }}
		</p>

		<p>
			<template v-for="(title, key, i) in colors" :key="key">
				<a
					href="#"
					class="button"
					@click.prevent
					:disabled="(i + 1) % 3 === 0"
					:class="[key === 'default' ? '' : key, i % 2 !== 0 ? 'outlined' : '']">
					{{ title }}
				</a>
				{{ '&#32;' }}
			</template>
		</p>
	</section>
</template>
