<script setup lang="ts">
import { provide } from 'vue';
import HomeItem from '@/components/home/HomeItem.vue';
import IconInjection from '@/components/icons/IconInjection.vue';
import ProvideAndInject from '@/components/provide-and-inject/ProvideAndInject.vue';

const arbitraryObject = {
	name: 'Attacktive',
	petPeeves: ['crowd', 'noisy coworkers']
};

provide('injection', arbitraryObject);
</script>

<template>
	<HomeItem>
		<template #icon>
			<IconInjection />
		</template>
		<template #heading>Provide / Inject</template>

		Just provided an object with the key <code>"injection"</code>

		<ProvideAndInject />
		<br>
		<a href="https://vuejs.org/guide/components/provide-inject" target="_blank">The docs</a>
	</HomeItem>
</template>
