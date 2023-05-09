<template>
	<TransitionRoot
		appear
		:show="props.show"
		as="template"
	>
		<Dialog
			as="div"
			@close="emits('close')"
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
						enter="duration-300 ease-out"
						enter-from="opacity-0 translate-y-4"
						leave="duration-300 ease-in"
						leave-to="opacity-0 translate-y-4"
					>
						<DialogPanel
							class="w-full flex flex-col gap-7 max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle
								as="h3"
								class="text-lg font-medium leading-6 text-gray-900"
							>
								Book Appointment
							</DialogTitle>
							<div>
								<Input
									as="textarea"
									name="Description"
									v-model="description"
								/>
								<div
									class="opacity-70 text-lg dark:text-white dark:opacity-100 mt-2 mb-1"
								>
									Blood Group
								</div>
								<div class="flex flex-col gap-1 items-center">
									<BloodGroupInput
										class=""
										v-model="bloodGroup"
									/>
									<RhFactorInput
										class="mt-4 mx-auto"
										v-model="rhFactor"
									/>
								</div>
							</div>

							<div class="mt-6 flex justify-end w-full space-x-5">
								<button
									type="button"
									@click="emits('close')"
								>
									Cancel
								</button>
								<Button
									type="primary"
									class="px-2 h-10 text-center"
									@click="make"
								>
									Publish Request
								</Button>
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
	import { storeToRefs } from "pinia";
	import Button from "@/components/shared/Button.vue";
	import BloodGroupInput from "../shared/BloodGroupInput.vue";
	import RhFactorInput from "../shared/RhFactorInput.vue";
	import useAuthStore from "@/stores/patient/auth";
	import notification from "@/helpers/notification";
	import Input from "@/components/shared/Input";
	import { ref } from "vue";
	import axios from "axios";

	const props = defineProps<{
		show: boolean;
	}>();
	const { currentUser } = storeToRefs(useAuthStore());

	const bloodGroup = ref("");
	const rhFactor = ref("");
	const description = ref("");
	const emits = defineEmits(["close", "success"]);

	async function make() {
		const data = new FormData();
		data.append("bloodGroup", bloodGroup.value);
		data.append("rhFactor", rhFactor.value);
		data.append("patient_id", currentUser.value.id);
		data.append("description", description.value);

		try {
			await axios.post(
				import.meta.env.VITE_API_URL + "/patient/make-request",
				data
			);

			notification(
				"Success",
				"Request published successfully",
				"success",
				"Checkmark"
			);
			emits("success");
		} catch (error) {
			notification(
				"Error",
				"failed to publish request",
				"danger",
				"CloseOutline"
			);
		}

		emits("close");
	}
</script>
