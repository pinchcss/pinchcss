<script setup>
function toggleTheme() {
	const data = document.documentElement.dataset;
	const theme = data.theme;
	if (theme) {
		data.theme = data.theme === 'dark' ? 'light' : 'dark';
	} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		data.theme = 'light';
	} else {
		data.theme = 'dark';
	}
}
</script>

<template>
	<header>
		<h1 class="brand-logo"><span @click="toggleTheme">🤌</span> Pinch Css Framework</h1>
	</header>
</template>

<style lang="scss" scoped>
@import '../pinch';

header {
	@extend %container-invert;
	position: sticky;
	z-index: 1;
	top: 0;
	margin-bottom: 1em;
	padding-top: 0.35em;
	padding-bottom: 0.35em;
	background: $brand-main;
	color: $body-bg;
	text-align: center;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
}

.brand-logo {
	font-size: 1.5em;
	font-weight: 900;
	letter-spacing: 0.1ex;
	font-variant: small-caps;
	text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
	margin: 0;

	span {
		cursor: pointer;
		user-select: none;
	}
}
</style>
