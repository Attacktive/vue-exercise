import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UserView from './UserView.vue';

describe(
	'UserView.vue',
	() => {
		it(
			'renders UserList and custom slot content',
			() => {
				const wrapper = mount(UserView);
				expect(wrapper.text()).toContain('Users Using a Scoped Slot');

				['Alice', 'Bob', 'Charlie'].forEach(name => expect(wrapper.text()).toContain(name));
				['21', '25', '66'].forEach(age => expect(wrapper.text()).toContain(age));

				const listItems = wrapper.findAll('li');
				expect(listItems).toHaveLength(3);

				const expected = [
					{ name: 'Alice', age: '(Age: 21)' },
					{ name: 'Bob', age: '(Age: 25)' },
					{ name: 'Charlie', age: '(Age: 66)' }
				];

				for (let i = 0; i < listItems.length; i++) {
					const listItem = listItems[i];

					const { name: expectedName, age: expectedAge } = expected[i];
					const [actualName, actualAge] = listItem.findAll('span');

					expect(actualName.text()).toBe(expectedName);
					expect(actualAge.text()).toBe(expectedAge);
				}
			}
		);
	}
);
