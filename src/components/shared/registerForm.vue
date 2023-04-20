<script setup lang="ts">
	import {
		MultiStepForm,
		Header,
		HeaderItem,
		Steps,
		Step,
		Footer,
	} from "headless-multistep-form-vue";
	import Input from "./Input";
	import useDonorStore from "@/stores/admin/donors";
	import Button from "./Button.vue";
	import BloodTypeInput from "./BloodTypeInput.vue";
	import RhFactorInput from "./RhFactorInput.vue";
	import intus from "intus";
	import { isRequired, isEmail, isMin, isSame } from "intus/rules";
	import BirthDatePicker from "@/components/shared/DatePicker/BirthDatePicker.vue";
	import GenderPicker from "@/components/shared/GenderPicker.vue";
	import { ref } from "vue";

	const { save, tempDonor } = useDonorStore();
	const errors = ref<any>({});

	function validateFirstStep() {
		errors.value = {};
		const validation = intus.validate(tempDonor, {
			name: [isRequired()],
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
		const validation = intus.validate(tempDonor, {
			phone: [isRequired()],
			address: [isRequired()],
			email: [isRequired(), isEmail()],
		});

		if (!validation.passes()) {
			errors.value = validation.errors();
			return false;
		}

		return true;
	}
	function validateThirdStep() {
		errors.value = {};
		const validation = intus.validate(
			tempDonor,
			{
				password: [isRequired(), isMin(8)],
				cpassword: [isRequired(), isSame("password")],
			},
			{
				cpassword: "Password confirmation",
			}
		);

		if (!validation.passes()) {
			errors.value = validation.errors();
			return false;
		}

		return true;
	}

	function submit() {
		save();
	}
</script>
<template>
	<MultiStepForm class="p-4 flex flex-col">
		<Header class="flex">
			<HeaderItem
				class="flex items-center"
				v-slot="{ active, passed }"
			>
				<div>
					<div class="text-xs">Personal</div>
					<div
						class="w-12 h-12 grid place-items-center rounded-lg transition-colors bg-red-400"
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
						class="h-1 w-32 absolute transition-transform origin-left bg-red-400 duration-200"
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
								? 'bg-red-400 transition-all delay-100'
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
						class="h-1 w-32 absolute bg-red-400 transition-transform origin-left duration-200"
						:class="[passed ? ' scale-x-100' : 'scale-x-0']"
					></div>
				</div>
			</HeaderItem>
			<HeaderItem
				v-slot="{ active, passed }"
				class="flex items-center"
			>
				<div>
					<div class="text-xs text-center">Security</div>
					<div
						class="w-12 h-12 grid place-items-center rounded-lg"
						:class="[
							active | passed
								? 'bg-red-400 transition-all delay-100'
								: 'bg-gray-200',
						]"
					>
						<Key
							class="w-6 h-6 transition-all delay-100"
							:class="[active | passed && ['fill-white']]"
						/>
					</div>
				</div>
				<div class="w-32 mt-2">
					<div class="h-1 w-32 absolute bg-gray-200"></div>
					<div
						class="h-1 w-32 absolute bg-red-400 transition-transform origin-left duration-200"
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
								? 'bg-red-400 transition-all delay-100'
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
						<Input
							type="text"
							name="Name"
							v-model="tempDonor.name"
							:error="errors.name"
						/>
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
						<Input
							type="email"
							name="Email"
							v-model="tempDonor.email"
							:error="errors.email"
						/>
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
					:validation="validateThirdStep"
				>
					<form class="flex flex-col gap-5">
						<Input
							name="Password"
							type="text"
							v-model="tempDonor.password"
							:error="errors.password"
						/>
						<Input
							name="Password Confirmation"
							type="text"
							v-model="tempDonor.cpassword"
							:error="errors.cpassword"
						/>
					</form>
				</Step>
			</transition>
			<transition
				enterActiveClass="transition-all absolute duration-300 delay-300"
				leaveActiveClass="transition-all absolute duration-300"
				enterFromClass="opacity-0 translate-x-4"
				leaveToClass="opacity-0 translate-x-4"
			>
				<Step
					class="w-full"
					:validation="() => true"
					:submit="submit"
				>
					<form class="flex flex-col items-center gap-5">
						<BloodTypeInput />
						<RhFactorInput />
					</form>
				</Step>
			</transition>
		</Steps>
		<Footer
			class="mt-10"
			v-slot="{ nextStep, previousStep, valid, start, end }"
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
					:type="!valid.value ? 'disabled' : 'primary'"
					@click="nextStep"
				>
					{{ end ? "Submit" : "Next" }}
				</Button>
			</div>
		</Footer>
	</MultiStepForm>
</template>
<style></style>
