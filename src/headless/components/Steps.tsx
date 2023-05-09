import { h, Transition } from "vue";

const Steps: any = {
	name: "Steps",
	render() {
		const currentStepId = this.$attrs.currentStepId;
		const slot = this.$slots;

		console.log(slot);

		return h("div", slot.default());
	},
};
export default Steps;
