<template>
	<TransitionRoot
		appear
		:show="props.show"
		as="template"
	>
		<Dialog
			as="div"
			@close="close"
			class="relative z-10"
		>
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-black bg-opacity-25" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div
					class="flex min-h-full items-center justify-center p-4 text-center"
				>
					<TransitionChild
						as="template"
						class="w-[60rem]"
						enter="duration-300 ease-out"
						enter-from="opacity-0 translate-y-4"
						leave="duration-300 ease-in"
						leave-to="opacity-0 translate-y-4"
					>
						<DialogPanel
							class="flex dark:bg-slate-600 w-[60rem] flex-col gap-4 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle
								as="h3"
								class="text-lg dark:text-white font-medium leading-6 text-gray-900"
							>
								Ask For Appointment
							</DialogTitle>
							<div class="dark:text-white">
								Please answer the following question carefully.
							</div>
							<QuestionPanel @close="close" />
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup lang="ts">
	import {
		TransitionRoot,
		TransitionChild,
		Dialog,
		DialogPanel,
		DialogTitle,
	} from "@headlessui/vue";

	import QuestionPanel from "./QuestionPanel.vue";

	const props = defineProps<{
		show: boolean;
	}>();

	const emits = defineEmits(["close"]);
	function close() {
		emits("close");
	}
</script>
