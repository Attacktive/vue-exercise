<script setup lang="ts">
import { computed, inject } from 'vue';

const injected = inject('injection');

const stringified = computed(() => {
	if (!injected) {
		return 'NOTHING';
	}

	try {
		return JSON.stringify(injected);
	} catch (error) {
		console.error(error);

		return String(injected);
	}
});
</script>

<template>
	<div>
		The injected:
		<p>
			<code>{{ stringified }}</code>
		</p>
	</div>
</template>
