import { h, ref, type Component, type VNode, computed } from "vue";
import FadeIn from "./FadeIn.vue";
import MultiStepFormFooter from "./MultiStepFormFooter.vue"


const currentStepId = ref(0)
let currentItem : VNode | undefined

export default  {
    render() : VNode{
        const defaultSlots = this.$slots.default()
        let i = 0
        currentItem = defaultSlots[currentStepId.value]

        const valid = computed(() => {
            if(currentItem?.props){
                return currentItem.props.validate()
            }
        })

        function nextStep(){ 
                if(currentItem.props.validate()) {
                    currentStepId.value = (currentStepId.value + 1)  % defaultSlots.length
                } 
        }
        function previousStep(){ 
                    console.log("called")
                    currentStepId.value = (currentStepId.value - 1)  
        }

        return h("div", 
        [
            h('div', { style :  { height : this.$attrs.height + "rem" }} ,h(FadeIn,  h(currentItem, { key : currentStepId.value}))),
            h(MultiStepFormFooter, { previousStep, nextStep, length : defaultSlots.length - 1, currentStep : currentStepId, valid})
        ])
    }
}



