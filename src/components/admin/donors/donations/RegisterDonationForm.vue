<template>
	<form
		action=""
		@submit.prevent="submit"
	>
		<div class="flex flex-col gap-3">
			<div class="space-y-2">
				<span class="opacity-70 text-lg"> Choose donation type: </span>
				<DonationTypePicker
					class="w-full"
					v-model="donation.type"
				/>
			</div>
			<div>
				<span class="opacity-70 text-lg">
					Amount of Donated Blood (ml)
				</span>
				<Input
					class="w-40"
					type="number"
					v-model="donation.amount"
				/>
			</div>
			<div class="flex justify-end">
				<Button
					class="w-20 h-10"
					type="primary"
					>Register</Button
				>
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
	import DonationTypePicker from "@/components/shared/DonationTypePicker.vue";
	import Input from "@/components/shared/Input";
	import Button from "@/components/shared/Button.vue";
	import useDonationsStore from "@/stores/admin/donations";
	import { ref } from "vue";

	const { registerDonation } = useDonationsStore();

	const donation = ref({
		type: null,
		amount: null,
	});

	function submit() {
		registerDonation(donation);
	}
</script>

<style scoped></style>
