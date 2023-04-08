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
	import validateEmail from "@/helpers/validateEmail";
	import useDonorStore from "@/stores/admin/donors";
	import Button from "./Button.vue";
	import BloodTypeInput from "./BloodTypeInput.vue";
	import RhFactorInput from "./RhFactorInput.vue";
	import intus from "intus";
	import { isRequired } from "intus/rules";

	const { save, tempDonor } = useDonorStore();
	function personalValidaton() {
		return (
			tempDonor.name != "" &&
			tempDonor.email != "" &&
			validateEmail(tempDonor.email)
		);
	}

	const validation = intus.validate(tempDonor, {
		"name.value": [isRequired()],
	});

	function submit() {
		save();
	}
</script>
<template>
	<MultiStepForm class="h-[27rem] p-8 flex flex-col justify-between">
		<Header class="flex">
			<HeaderItem
				class="flex items-center"
				v-slot="{ active, passed }"
			>
				<div>
					<div class="text-xs">Personal</div>
					<div
						class="w-12 h-12 grid place-items-center rounded-lg transition-colors bg-indigo-600"
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
						class="h-1 w-32 absolute transition-transform origin-left bg-indigo-600 duration-200"
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
								? 'bg-indigo-600 transition-all delay-100'
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
						class="h-1 w-32 absolute bg-indigo-600 transition-transform origin-left duration-200"
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
								? 'bg-indigo-600 transition-all delay-100'
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
		<Steps class="h-36 w-full relative">
			<transition
				enterActiveClass="transition-all absolute duration-300 delay-300"
				leaveActiveClass="transition-all absolute"
				leaveToClass="translate-y-4 opacity-0"
				enterFromClass="translate-y-4 opacity-0"
			>
				<Step
					class="w-full"
					:validation="personalValidaton"
				>
					<form class="flex flex-col gap-5">
						<Input
							type="text"
							name="Name"
							v-model="tempDonor.name"
							:validation="() => tempDonor.name != ''"
							errorMsg="this field cannot be empty"
						/>
						<Input
							type="email"
							name="Email"
							v-model="tempDonor.email"
							:validation="
								() =>
									tempDonor.email != '' &&
									validateEmail(tempDonor.email)
							"
							errorMsg="this field must be a valid email "
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
					:validation="() => tempDonor.phone != ''"
				>
					<form class="flex flex-col gap-5">
						<Input
							name="Phone"
							type="text"
							:validation="() => tempDonor.phone != ''"
							v-model="tempDonor.phone"
						/>
						<Input
							name="Address"
							type="text"
							:validation="() => tempDonor.address != ''"
							v-model="tempDonor.address"
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
					:validation="() => tempDonor.address != ''"
					:submit="submit"
				>
					<form class="flex flex-col items-center gap-5">
						<BloodTypeInput />
						<RhFactorInput />
					</form>
				</Step>
			</transition>
		</Steps>
		<Footer v-slot="{ nextStep, previousStep, valid, start, end }">
			<div class="flex gap-8 justify-end">
				<button
					@click="previousStep"
					v-if="!start"
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
