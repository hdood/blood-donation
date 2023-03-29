<template>
	<div class="p-5 bg-secondary rounded-xl dark:bg-slate-600 relative">
		<div class="flex items-center gap-8">
			<img src="/doctor.jpeg" class="rounded-full" alt="" />
			<div class="dark:text-white space-y-2">
				<div>
					<input
						v-if="editing"
						class="text-xl text-black rounded-lg px-4 w-64 font-medium py-1 border focus:outline-none"
						type="text"
						v-model="name"
					/>
					<span class="text-xl block" v-else>
						{{ currentDonor.name }}
					</span>
				</div>
				<div>
					<span class="block opacity-80 text-sm">
						{{ currentDonor.address }}
					</span>
				</div>
			</div>
		</div>
		<div class="mt-4 p-3 dark:text-white space-y-4">
			<div>
				<span class="opacity-60">Email :&nbsp; </span>
				<input
					v-if="editing"
					class="text-black rounded-lg px-4 font-medium py-1 border focus:outline-none"
					type="text"
					v-model="email"
				/>
				<span v-else>
					{{ currentDonor.email }}
				</span>
			</div>
			<div>
				<span class="opacity-60">Blood Type :&nbsp; </span>
				<div v-if="editing" class="flex justify-center mt-3">
					<BloodTypeInput />
				</div>
				<span v-else>
					{{ bloodType }}
				</span>
			</div>
			<div>
				<span class="opacity-60">Phone :&nbsp; </span>
				<input
					v-if="editing"
					class="text-black rounded-lg px-4 font-medium py-1 border focus:outline-none"
					type="text"
					v-model="phone"
				/>
				<span v-else>
					{{ currentDonor.phone }}
				</span>
			</div>
		</div>

		<div class="absolute top-2 right-4 cursor-pointer">
			<DonorCardOptions />
		</div>
	</div>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import BloodTypeInput from "@/components/shared/BloodTypeInput.vue";
	import DonorCardOptions from "@/components/admin/DonorCardOptions.vue";
	import { ref, computed } from "vue";

	const email = ref("");
	const name = ref("");
	const phone = ref("");
	const gender = ref("");

	const { currentDonor, editing } = storeToRefs(useDonorsStore());
	const bloodType = computed(() => {
		const rh = currentDonor.value.rhFactor ? " -" : " +";
		return currentDonor.value.bloodType.toUpperCase() + " " + rh;
	});
	function edit() {
		editing.value = !editing.value;
		name.value = currentDonor.value.name;
		email.value = currentDonor.value.email;
		phone.value = currentDonor.value.phone;
		gender.value = currentDonor.value.gender;
	}
</script>

<style scoped></style>
