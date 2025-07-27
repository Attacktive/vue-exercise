import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CustomToggle from './CustomToggle.vue'

describe('CustomToggle', () => {
	it('renders and binds custom v-model:checked', async () => {
		const wrapper = mount(CustomToggle, { props: { checked: false } })
		await wrapper.find('button').trigger('click')
		const emitted = wrapper.emitted('update:checked')
		expect(emitted).toBeTruthy()
		expect(emitted![0]).toEqual([true])
	})
})
