import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SimpleInput from './SimpleInput.vue'

describe('SimpleInput', () => {
	it('renders and binds v-model', async () => {
		const wrapper = mount(SimpleInput, { props: { modelValue: '' } })
		const input = wrapper.find('input')
		await input.setValue('hello')
		const emitted = wrapper.emitted('update:modelValue')
		expect(emitted).toBeTruthy()
		expect(emitted![0]).toEqual(['hello'])
	})
})
