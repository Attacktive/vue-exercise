import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomInputComponents from './CustomInputComponents.vue';

describe(
	'CustomInputComponents',
	() => {
		it(
			'renders and binds all v-models',
			async () => {
				const wrapper = mount(CustomInputComponents);
				const [input, checkbox, select, customToggle] = [
					wrapper.findComponent({ name: 'SimpleInput' }),
					wrapper.findComponent({ name: 'SimpleCheckbox' }),
					wrapper.findComponent({ name: 'SimpleSelect' }),
					wrapper.findComponent({ name: 'CustomToggle' })
				];

				await input.find('input').setValue('yo');
				await checkbox.find('input').setValue(true);
				await select.find('select').setValue('a');
				await customToggle.find('button').trigger('click');

				expect(wrapper.text()).toContain('yo');
				expect(wrapper.text()).toContain('true');
				expect(wrapper.text()).toContain('a');
			}
		);
	}
);
