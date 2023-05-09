<template>
	<TransitionRoot
		appear
		:show="donationsModal"
		as="template"
	>
		<Dialog
			as="div"
			@close="toggleDonationsModal"
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
							class="transform panel p-4 rounded-lg bg-white dark:bg-slate-500 text-left align-middle shadow-xl transition-all"
						>
							<div class="text-2xl">Register Donation</div>
							<RegisterDonationForm />
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
	import useDonationsStore from "@/stores/admin/donations";
	import { storeToRefs } from "pinia";
	import RegisterDonationForm from "@/components/admin/donors/donations/RegisterDonationForm.vue";

	const { toggleDonationsModal } = useDonationsStore();
	const { donationsModal } = storeToRefs(useDonationsStore());
</script>
<style scoped></style>
