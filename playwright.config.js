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
			name: 'chrome',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'chrome dark',
			use: { ...devices['Desktop Chrome'], colorScheme: 'dark' },
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'firefox dark',
			use: { ...devices['Desktop Firefox'], colorScheme: 'dark' },
		},
		{
			name: 'safari',
			use: { ...devices['Desktop Safari'] },
		},
		{
			name: 'safari dark',
			use: { ...devices['Desktop Safari'], colorScheme: 'dark' },
		},
		/* Test against mobile viewports. */
		{
			name: 'mobile chrome',
			use: { ...devices['Pixel 5'] },
		},
		{
			name: 'mobile chrome dark',
			use: { ...devices['Pixel 5'], colorScheme: 'dark' },
		},
		{
			name: 'mobile safari',
			use: { ...devices['iPhone 12'] },
		},
		{
			name: 'mobile safari dark',
			use: { ...devices['iPhone 12'], colorScheme: 'dark' },
		},
		/* Test against branded browsers. */
		// {
		// 	name: 'Microsoft Edge',
		// 	use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
	],
};

export default config;
