import { h, type VNode } from "vue";

export default {
	name: "Footer",
	render(): VNode {
		return h(
			"div",
			this.$slots.default({
				nextStep: this.$attrs.nextStep,
				previousStep: this.$attrs.previousStep,
			})
		);
	},
};
