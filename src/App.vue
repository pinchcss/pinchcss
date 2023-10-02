<script setup>
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
	<AppHeader />
	<nav>
		<RouterLink to="/">Typography</RouterLink>
		<RouterLink to="/inputs">Inputs</RouterLink>
		<RouterLink to="/buttons">Buttons</RouterLink>
	</nav>
	<div class="container">
		<RouterView />
	</div>
</template>

<style lang="scss">
#app {
	@extend %container;
}

nav {
	display: flex;
	margin-bottom: 1em;

	> a {
		flex: auto;
		text-align: center;
	}

	.router-link-active {
		font-weight: bold;
		text-decoration: none;
		cursor: default;
		user-select: none;
		pointer-events: none;
	}
}

.field {
	@extend %field;
}

.grid {
	@extend %grid-md;
}

.col {
	@extend %col;
}
</style>

<!--
<style>
/**
 *	1. Higher priority than 2 and 3
 *	2. similar as 3
 *  3. similar as 2 but higher priority
 */
:hover:where(.container h1):hover { /* 1 */
	color: blueviolet;
}

:hover:where(.container h1) {
	color: green;
}

:where(.container h1):hover {
	color: red;
}

:where(.container h1):after {
	content: '1';
}

:hover.container h1 {
	background-color: aqua;
}
</style>
-->
