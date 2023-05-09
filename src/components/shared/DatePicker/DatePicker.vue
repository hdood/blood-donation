<template>
	<div class="flex space-x-4">
		<Day
			v-model="day"
			:days="daysNumber"
		/>
		<Month
			:months="legalMonths"
			v-model="month"
		/>
		<Year
			v-model="year"
			:years="legalYears"
		/>
	</div>
</template>

<script setup lang="ts">
	import Day from "@/components/shared/DatePicker/Day.vue";
	import Month from "@/components/shared/DatePicker/Month.vue";
	import Year from "@/components/shared/DatePicker/Year.vue";
	import range from "@/helpers/range";
	import { computed, ref, watch } from "vue";

	const props = defineProps<{
		initialDate?: string;
	}>();

	const day = ref(new Date(props.initialDate as string).getDate());
	const month = ref(new Date(props.initialDate as string).getMonth());
	const year = ref(new Date(props.initialDate as string).getFullYear());

	const date = computed(() => {
		return {
			str: `${year.value}-${month.value}-${day.value}`,
			date: new Date(`${month.value}/${day.value}/${year.value}`),
			age:
				new Date().getFullYear() -
				new Date(
					`${month.value}/${day.value}/${year.value}`
				).getFullYear(),
		};
	});
	const allMonths = {
		1: "january",
		2: "february",
		3: "march",
		4: "april",
		5: "may",
		6: "june",
		7: "july",
		8: "august",
		9: "september",
		10: "october",
		11: "november",
		12: "december",
	};

	const legalMonths = computed(() => {
		const currentMonth = new Date().getMonth();

		return allMonths.filter((month, index) => {
			if (index >= currentMonth) return month;
		});
	});
	const legalYears = computed(() => {
		const currentYear = new Date().getFullYear();

		return [currentYear];
	});

	const daysNumber = computed(() => {
		const currentDay = new Date().getDay();
		const totalDays = new Date(year.value, month.value, 0).getDate();

		return range(currentDay + 1, totalDays);
	});

	const emits = defineEmits(["update:modelValue"]);

	watch(date, (value) => emits("update:modelValue", value.str));
</script>

<style scoped></style>
