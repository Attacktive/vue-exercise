<script setup lang="ts">
import type { OnOrOff } from '@/components/v-model/CustomToggle.types.ts';

const value = defineModel<OnOrOff>();

const toggle = () => {
	if (value.value === 'ON') {
		value.value = 'OFF';
	} else {
		value.value = 'ON';
	}
}
</script>

<template>
	<button @click="toggle">{{ value }}</button>
</template>
