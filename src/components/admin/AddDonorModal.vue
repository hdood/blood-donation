<template>
	<TransitionRoot appear :show="addDonorModal" as="template">
		<Dialog as="div" @close="toggleAddDonorModal" class="relative z-10">
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
						enter-from="opacity-0 translate-y-4"
						enter-to="opacity-100"
						leave-from="opacity-100 "
						leave-to="opacity-0 translate-y-4"
					>
						<DialogPanel
							class="h-[40rem] w-[30rem] transform overflow-hidden rounded-2xl bg-white dark:bg-slate-600 p-6 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle
								class="text-3xl font-medium leading-6 text-gray-900 mb-6"
							>
								Add Donor
							</DialogTitle>

							<div class="space-y-4">
								<Input
									type="text"
									name="name"
									v-model="tempDonor.name"
									:validation="() => tempDonor.name != ''"
								/>
								<Input
									type="text"
									name="email"
									v-model="tempDonor.email"
									:validation="
										() => validateEmail(tempDonor.email)
									"
									errorMsg="this field must be a valid email"
								/>
								<div class="flex flex-col gap-2 h-20">
									<span
										class="opacity-70 text-lg dark:text-white"
									>
										Date Of Birth</span
									>
									<BirthDatePicker class="self-center" />
								</div>
								<div class="flex flex-col gap-4 -z-10">
									<span
										class="opacity-70 text-lg -z-10 dark:text-white"
									>
										Blood Type</span
									>

									<div
										class="inline-flex flex-col items-center gap-5"
									>
										<BloodTypeInput />

										<RhFactorInput />
									</div>
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
	import {
		TransitionRoot,
		TransitionChild,
		Dialog,
		DialogPanel,
		DialogTitle,
	} from "@headlessui/vue";
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import Input from "../shared/Input";
	import validateEmail from "@/helpers/validateEmail";
	import BirthDatePicker from "../shared/DatePicker/BirthDatePicker.vue";
	import BloodTypeInput from "../shared/BloodTypeInput.vue";
	import RhFactorInput from "../shared/RhFactorInput.vue";
	const { tempDonor } = useDonorsStore();

	const { toggleAddDonorModal } = useDonorsStore();
	const { addDonorModal } = storeToRefs(useDonorsStore());
</script>
