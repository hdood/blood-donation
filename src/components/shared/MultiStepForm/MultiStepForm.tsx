import { h, ref, type VNode, Transition } from "vue";

const currentStepId = ref(0);
export default {
	render(): VNode {
		const slots = this.$slots.default();

		const stepsWrapper = slots.find(
			(slot: VNode) => slot.type.name == "Steps"
		);
		const footer = slots.find((slot: VNode) => slot.type.name == "Footer");

		const steps = stepsWrapper.children.default();
		const currentStep = steps[currentStepId.value];

		function nextStep() {
			if (currentStepId.value < steps.length - 1) currentStepId.value++;
		}
		function previousStep() {
			if (currentStepId.value != 0) currentStepId.value--;
		}

		return h("div", [
			h(
				stepsWrapper,
				h(
					Transition,
					{
						enterActiveClass: "transition-all absolute",
						leaveActiveClass: "transition-all absolute",
						enterFromClass: "opacity-0 translate-x-4",
						leaveToClass: "opacity-0 translate-x-4",
					},
					() => h(currentStep, { key: currentStepId.value })
				)
			),
			h(footer, { nextStep, previousStep }),
		]);
	},
};
