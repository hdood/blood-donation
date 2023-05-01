<template>
	<TransitionRoot
		appear
		:show="updateDonorModal"
		as="template"
	>
		<Dialog
			as="div"
			@close="toggleUpdateDonorModal"
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
							class="transform panel space-y-5 rounded-lg bg-white dark:bg-slate-500 text-left align-middle shadow-xl transition-all"
						>
							<UpdateDonorForm />
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
	} from "@headlessui/vue";
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import UpdateDonorForm from "@/components/admin/donors/UpdateDonorForm.vue";

	const { toggleUpdateDonorModal } = useDonorsStore();
	const { updateDonorModal, tempDonor } = storeToRefs(useDonorsStore());
</script>
<style scoped></style>
