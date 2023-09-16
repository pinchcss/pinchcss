import { devices } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'pnpm run doc:build && npm run doc:preview',
		port: 4173,
	},
	testDir: 'e2e',
	testMatch: /(.+\.)?spec\.cjs/,
	projects: [
		/* Test against desktop browsers */
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
		/* Test against mobile viewports. */
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] },
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] },
		},
		/* Test against branded browsers. */
		// {
		// 	name: 'Microsoft Edge',
		// 	use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
	],
};

export default config;
