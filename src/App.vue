<script setup>
import PageIndex from '@/components/PageIndex.vue';
</script>

<template>
	<header>
		<h1 class="brand-logo">Pinch Css Framework</h1>
	</header>
	<page-index />
</template>

<style lang="scss">
@import '../pinch';

#app {
	@extend %container;
}

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
}

.field {
	@extend %field;
}

.box {
	@extend %box;
	&.inverted {
		background: $body-color;
		color: $body-bg;
	}
}

.grid {
	@extend %grid-md;
}

.col {
	@extend %col;
}
</style>
