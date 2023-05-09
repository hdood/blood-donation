<template>
	<div class="flex flex-col gap-3">
		<div class="flex flex-col gap-2">
			<span class="opacity-70 text-lg dark:text-white dark:opacity-100">
				Appointment Date
			</span>
			<VueDatePicker
				v-model="tempDate"
				:format="format"
				:preview-format="format"
				:min-date="minDate"
				:max-date="maxDate"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<span class="opacity-70 text-lg dark:text-white dark:opacity-100">
				Appointment Time
			</span>

			<HoursInput
				:hours="freeHours"
				v-model="tempTime"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { storeToRefs } from "pinia";
	import useAppointmentsStore from "@/stores/donor/appointments";
	import { computed, ref, watch } from "vue";
	import VueDatePicker from "@vuepic/vue-datepicker";
	import { getMonth, getYear, addWeeks } from "date-fns";
	import HoursInput from "./HoursInput.vue";

	const { tempDate, tempTime, freeHours, formattedDate } = storeToRefs(
		useAppointmentsStore()
	);
	const { fetchFreeHours } = useAppointmentsStore();

	watch(tempDate, () => {
		fetchFreeHours(formattedDate.value);
	});

	const format = (date: Date) => {
		var month = date.getUTCMonth() + 1; //months from 1-12
		var day = date.getUTCDate();
		var year = date.getUTCFullYear();

		return year + "-" + month + "-" + day;
	};
	const minDate = computed(() => new Date());
	const maxDate = computed(() =>
		addWeeks(new Date(getYear(new Date()), getMonth(new Date())), 2)
	);
</script>

<style lang="scss" scoped></style>
