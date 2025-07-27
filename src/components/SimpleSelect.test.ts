import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SimpleSelect from './SimpleSelect.vue'

describe('SimpleSelect', () => {
	it('renders and binds v-model', async () => {
		const options = [
			{ value: '', label: 'Select one' },
			{ value: 'a', label: 'A' }
		]
		const wrapper = mount(SimpleSelect, { props: { modelValue: '', options } })
		const select = wrapper.find('select')
		await select.setValue('a')
		const emitted = wrapper.emitted('update:modelValue')
		expect(emitted).toBeTruthy()
		expect(emitted![0]).toEqual(['a'])
	})
})
