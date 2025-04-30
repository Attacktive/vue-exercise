import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TheHome from "./TheHome.vue";

const providedObject = {
	name: "Attacktive",
	petPeeves: ["crowd", "noisy coworkers"]
};

describe(
	"TheHome.vue",
	() => it(
		"renders ProvideAndInject and displays the provided object",
		() => {
			const wrapper = mount(TheHome);

			expect(wrapper.html()).toContain(JSON.stringify(providedObject));
		}
	)
);
