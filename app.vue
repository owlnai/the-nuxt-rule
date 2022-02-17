<script setup>
import { useDark } from '@vueuse/core';
useDark();
</script>

<template>
	<div
		class="text-center flex flex-col place-content-center min-h-screen text-nuxt-primary dark:bg-nuxt-dark dark:text-gray-200">
		<TheHeader />
		<TheMain />
		<TheFooter />
	</div>
</template>
