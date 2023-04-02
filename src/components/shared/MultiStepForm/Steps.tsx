import { h } from "vue";

export default {
	name: "Steps",
	render() {
		const currentStepId = this.$attrs.currentStepId;

		return h("div", this.$slots[0]());
	},
};
