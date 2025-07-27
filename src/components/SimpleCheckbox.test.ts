import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SimpleCheckbox from './SimpleCheckbox.vue'

describe('SimpleCheckbox', () => {
	it('renders and binds v-model', async () => {
		const wrapper = mount(SimpleCheckbox, { props: { modelValue: false } })
		const input = wrapper.find('input[type="checkbox"]')
		await input.setChecked(true)
		const emitted = wrapper.emitted('update:modelValue')
		expect(emitted).toBeTruthy()
		expect(emitted![0]).toEqual([true])
	})
})
