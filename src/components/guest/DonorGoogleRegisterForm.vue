<template>
	<MultiStepForm class="p-4 w-[32rem] flex flex-col bg-white rounded-lg">
		<Header class="flex">
			<HeaderItem
				class="flex items-center"
				v-slot="{ active, passed }"
			>
				<div>
					<div class="text-xs">Personal</div>
					<div
						class="w-12 h-12 grid place-items-center rounded-lg transition-colors bg-indigo-400"
					>
						<User
							class="w-6 h-6"
							:class="[active | passed && ['fill-white']]"
						/>
					</div>
				</div>
				<div class="w-32 mt-2">
					<div class="h-1 w-32 absolute bg-gray-200"></div>
					<div
						class="h-1 w-32 absolute transition-transform origin-left bg-indigo-400 duration-200"
						:class="[passed ? ' scale-x-100' : 'scale-x-0']"
					></div>
				</div>
			</HeaderItem>

			<HeaderItem
				v-slot="{ active, passed }"
				class="flex items-center"
			>
				<div>
					<div class="text-xs text-center">Contact</div>
					<div
						class="w-12 h-12 grid place-items-center rounded-lg"
						:class="[
							active | passed
								? 'bg-indigo-400 transition-all delay-100'
								: 'bg-gray-200',
						]"
					>
						<Phone
							class="w-6 h-6 transition-all delay-100"
							:class="[active | passed && ['fill-white']]"
						/>
					</div>
				</div>
				<div class="w-32 mt-2">
					<div class="h-1 w-32 absolute bg-gray-200"></div>
					<div
						class="h-1 w-32 absolute bg-indigo-400 transition-transform origin-left duration-200"
						:class="[passed ? ' scale-x-100' : 'scale-x-0']"
					></div>
				</div>
			</HeaderItem>

			<HeaderItem
				v-slot="{ active }"
				class="flex items-center w-full"
			>
				<div>
					<div class="text-xs text-center">Blood</div>
					<div
						class="w-12 h-12 grid place-items-center rounded-lg"
						:class="[
							active
								? 'bg-indigo-400 transition-all delay-100'
								: 'bg-gray-200',
						]"
					>
						<Heart
							class="w-6 h-6"
							:class="[
								active && [
									'fill-white transition-all delay-100',
								],
							]"
						/>
					</div>
				</div>
			</HeaderItem>
		</Header>

		<Steps class="h-72 w-full relative mt-10">
			<transition
				enterActiveClass="transition-all absolute duration-300 delay-300"
				leaveActiveClass="transition-all absolute"
				leaveToClass="translate-y-4 opacity-0"
				enterFromClass="translate-y-4 opacity-0"
			>
				<Step
					class="w-full"
					:validation="validateFirstStep"
				>
					<form class="flex flex-col gap-5">
						<div class="space-y-2">
							<span class="opacity-70 text-lg"> Gender </span>
							<GenderPicker v-model="tempDonor.gender" />
						</div>
						<div class="space-y-2">
							<label
								class="opacity-70 text-lg"
								for="dob"
							>
								Date Of Birth
							</label>
							<BirthDatePicker v-model="tempDonor.dob" />
						</div>
					</form>
				</Step>
			</transition>

			<transition
				enterActiveClass="transition-all absolute duration-300 delay-300"
				leaveActiveClass="transition-all absolute"
				leaveToClass="translate-y-4 opacity-0"
				enterFromClass="translate-y-4 opacity-0"
			>
				<Step
					class="w-full"
					:validation="validateSecondStep"
				>
					<form class="flex flex-col gap-5">
						<Input
							name="Phone"
							type="text"
							v-model="tempDonor.phone"
							:error="errors.phone"
						/>
						<Input
							name="Address"
							type="text"
							v-model="tempDonor.address"
							:error="errors.address"
						/>
					</form>
				</Step>
			</transition>

			<transition
				enterActiveClass="transition-all absolute duration-300 delay-300"
				leaveActiveClass="transition-all absolute duration-300"
				enterFromClass="opacity-0 translate-y-4"
				leaveToClass="opacity-0 translate-y-4"
			>
				<Step
					class="w-full"
					:validation="validateLastStep"
					:submit="submit"
				>
					<form class="flex flex-col gap-5">
						<div class="flex gap-3 items-center">
							<label
								class="opacity-70 text-lg dark:text-white dark:opacity-100"
							>
								Choose your Blood Group :
							</label>
							<bloodGroupInput v-model="tempDonor.bloodGroup" />
						</div>
						<div class="flex gap-3 items-center">
							<label
								class="opacity-70 text-lg dark:text-white dark:opacity-100"
							>
								Choose your Rh Factor :
							</label>
							<RhFactorInput v-model="tempDonor.rhFactor" />
						</div>
					</form>
				</Step>
			</transition>
		</Steps>

		<Footer
			class="mt-10"
			v-slot="{ nextStep, previousStep, end, start, valid }"
		>
			<div class="flex gap-8 justify-end">
				<button
					@click="previousStep"
					v-if="!start"
					class="dark:text-white"
				>
					Previous
				</button>
				<Button
					class="w-20 h-10"
					:type="
						!valid.value ? 'disabled' : end ? 'success' : 'primary'
					"
					@click="nextStep"
				>
					{{ end ? "Submit" : "Next" }}
				</Button>
			</div>
		</Footer>
	</MultiStepForm>
</template>

<script setup lang="ts">
	import useAuthStore from "@/stores/donor/auth";
	import { storeToRefs } from "pinia";
	import intus from "intus";
	import { isRequired, isEmail, isMin, isSame, isIn } from "intus/rules";
	import { useRouter } from "vue-router";
	import {
		MultiStepForm,
		Header,
		HeaderItem,
		Steps,
		Step,
		Footer,
	} from "headless-multistep-form-vue";
	import Input from "@/components/shared/Input";
	import Button from "@/components/shared/Button.vue";
	import bloodGroupInput from "@/components/shared/BloodGroupInput.vue";
	import RhFactorInput from "@/components/shared/RhFactorInput.vue";
	import BirthDatePicker from "@/components/shared/DatePicker/BirthDatePicker.vue";
	import GenderPicker from "@/components/shared/GenderPicker.vue";

	const router = useRouter();
	const { tempDonor, errors } = storeToRefs(useAuthStore());
	const { googleRegister } = useAuthStore();

	function validateFirstStep() {
		errors.value = false;
		const validation = intus.validate(tempDonor.value, {
			gender: [isRequired()],
			dob: [isRequired()],
		});
		if (!validation.passes()) {
			errors.value = validation.errors();
			return false;
		}
		return true;
	}

	function validateSecondStep() {
		errors.value = {};
		const validation = intus.validate(tempDonor.value, {
			phone: [isRequired()],
			address: [isRequired()],
		});
		if (!validation.passes()) {
			errors.value = validation.errors();
			return false;
		}
		return true;
	}

	function validateLastStep() {
		errors.value = {};
		return true;
	}

	function submit() {
		googleRegister(router);
	}
</script>

<style lang="scss" scoped></style>
