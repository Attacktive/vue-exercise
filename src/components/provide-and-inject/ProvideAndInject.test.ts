import { describe, expect, it } from "vitest";
import { defineComponent, h, provide } from "vue";
import { mount } from "@vue/test-utils";
import ProvideAndInject from "./ProvideAndInject.vue";

interface Injection {
	foo: string;
	numbers?: number[];
}

const makeProviderWrapper = (value: Injection) => defineComponent({
	name: "ProviderWrapper",
	setup() {
		provide("injection", value);
		return () => h(ProvideAndInject);
	}
});

describe(
	"ProvideAndInject.vue",
	() => {
		it("renders the injected value when provided", () => {
			const injected = { foo: "bar", numbers: [1, 2, 3] };
			const wrapper = mount(makeProviderWrapper(injected));

			expect(wrapper.html())
				.toContain(JSON.stringify(injected));
		});

		it("renders 'NOTHING' when no injection is provided", () => {
			const wrapper = mount(ProvideAndInject);

			expect(wrapper.html()).toContain("NOTHING");
		});
	}
);
