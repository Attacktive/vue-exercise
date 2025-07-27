<script setup lang="ts">
import { onMounted } from 'vue';

type Primitive = string | number | boolean | null;

interface Option {
	value?: Primitive;
	label: string;
}

interface Props {
	options: Option[];
}

const props = withDefaults(
	defineProps<Props>(),
	{ options: () => [] }
);

const value = defineModel<Primitive>();

onMounted(() => {
	if ('modelValue' in props) {
		console.debug(`The component has 'modelValue' prop`, props.modelValue);
		console.debug('props.modelValue === value.value?', props.modelValue === value.value);
	} else {
		throw new Error(`The component is missing 'modelValue' prop!?`);
	}
});
</script>

<template>
	<select v-model="value">
		<option v-for="(option, index) in options" :key="`option-${index}`" :value="option.value">
			{{ option.label }}
		</option>
	</select>
</template>
