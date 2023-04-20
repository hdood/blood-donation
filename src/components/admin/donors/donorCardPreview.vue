<template>
	<TransitionRoot
		appear
		:show="showDonorCardPreview"
		as="template"
	>
		<Dialog
			as="div"
			@close="toggleDonorCardPreview"
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
						enter="transition-all duration-300  ease-out"
						enter-from="opacity-0 translate-y-4"
						leave="transition-all duration-300 ease-in"
						leave-to="opacity-0 translate-y-4"
					>
						<DialogPanel
							class="transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
						>
							<div class="p-5 space-y-3">
								<div>
									<span class="text-xl">Preview : </span>
								</div>
								<div ref="capture">
									<DonorCardPrintable />
								</div>
								<div class="flex justify-end space-x-10">
									<Button
										@click="toggleDonorCardPreview"
										type="simple"
									>
										Cancel
									</Button>
									<Button
										type="primary"
										@click="print"
										class="px-2 py-1 h-10"
									>
										Print card
									</Button>
								</div>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import DonorCardPrintable from "./DonorCardPrintable.vue";
	import { ref } from "vue";
	import {
		TransitionRoot,
		TransitionChild,
		Dialog,
		DialogPanel,
	} from "@headlessui/vue";
	import Button from "@/components/shared/Button.vue";
	const capture = ref(null);
	const { showDonorCardPreview } = storeToRefs(useDonorsStore());
	const { toggleDonorCardPreview, printCard } = useDonorsStore();

	function print() {
		printCard(capture.value);
	}
</script>

<style scoped></style>
