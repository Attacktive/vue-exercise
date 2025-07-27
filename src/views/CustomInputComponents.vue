<script setup lang="ts">
import { ref } from 'vue';
import SimpleInput from '@/components/SimpleInput.vue';
import SimpleCheckbox from '@/components/SimpleCheckbox.vue';
import SimpleSelect from '@/components/SimpleSelect.vue';
import CustomToggle from '@/components/CustomToggle.vue';
import type { OnOrOff } from '@/components/v-model/CustomToggle.types.ts';

const text = ref('');
const checked = ref(false);
const selected = ref('');
const customToggleValue = ref<OnOrOff>('OFF');

const options = [
	{ value: '', label: 'Select one' },
	{ value: 'a', label: 'Option A' },
	{ value: 'b', label: 'Option B' }
];
</script>

<template>
	<div>
		<h2>v-model</h2>
		<div>
			<SimpleInput v-model="text" />
			<br>
			<span>text: {{ text }}</span>
		</div>
		<div>
			<SimpleCheckbox v-model="checked" />
			<br>
			<span>checked: {{ checked }}</span>
		</div>
		<div>
			<SimpleSelect v-model="selected" :options="options" />
			<br>
			<span>selected option value: {{ selected }}</span>
		</div>
		<div>
			<CustomToggle v-model="customToggleValue" />
			<br>
			<span>customToggleValue: {{ customToggleValue }}</span>
		</div>
	</div>
</template>

<style scoped>
div {
	margin: 5px 0;
}
</style>
