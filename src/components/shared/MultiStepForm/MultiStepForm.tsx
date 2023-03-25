import { ref, type VNode, computed } from "vue";
import FadeIn from "./FadeIn.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Body from "./Body.vue";

const currentStepId = ref(0);
let currentItem: VNode | undefined;
const result = {};

export default {
	name :"Form" ,
	render(node): VNode {

		const defaultSlots = node.$slots.default();
		let i = 0;
		currentItem = defaultSlots[currentStepId.value];
		const infos: { title: string ; key: number; }[] = [];

		defaultSlots.map((step: any, key: number) => {
			infos.push({ title: step.props.title, key });
		});

		const valid = computed(() => {
			if (currentItem?.props) {
				return currentItem.props.validate();
			}
		});

		function nextStep() {
			const fields = currentItem?.props?.validate();
			if (!fields) return;
			Object.assign(result, fields);
			if (fields.finish) {
				delete result.finish;
				fields.finish(result);
				return;
			}
			currentStepId.value =
				(currentStepId.value + 1) % defaultSlots.length;
		}
		function previousStep() {
			currentStepId.value = currentStepId.value - 1;
		}
		
		return (
			<div class="">
				<Header infos={infos} currentStepId={currentStepId.value} length={defaultSlots.length} />
				<div class="w-full relative border flex  flex-col items-center space-y-7 gap-5 "> 
					<Body>
						{ () => (
							<div class="w-96 h-52"> 
								<FadeIn>
									<currentItem class="w-full" key={currentStepId.value} /> 
								</FadeIn>
							</div>  
						)}	
					</Body>
					<Footer previousStep={previousStep} nextStep={nextStep} length={defaultSlots.length} currentStep={currentStepId} valid={valid} /> 
				</div>
			</div>
		)
	},

};
