<template>
	<TransitionRoot
		appear
		:show="openModal"
		as="template"
	>
		<Dialog
			as="div"
			@close="toggleAddModal"
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
						enter="transition-all duration-300 "
						enter-from="opacity-0 translate-y-4"
						leave="transition-all duration-300"
						leave-to="opacity-0 translate-y-4"
					>
						<DialogPanel
							class="transform overflow-hidden rounded-2xl bg-white dark:bg-slate-600 text-left align-middle shadow-xl transition-all"
						>
							<registerForm />
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
	import { storeToRefs } from "pinia";
	import registerForm from "../shared/registerForm.vue";
	import useDonorsStore from "@/stores/donors/donors";
	const { addStore } = useDonorsStore();

	const { toggleAddModal } = addStore;
	const { openModal } = storeToRefs(addStore);
</script>
