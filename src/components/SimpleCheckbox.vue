<script setup lang="ts">
const value = defineModel<boolean>();
</script>

<template>
	<div>
		<input type="checkbox" v-model="value" />
		<br>
		`value` equals `modelValue`?: {{ value === modelValue }}
	</div>
</template>
