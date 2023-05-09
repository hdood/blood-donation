<template>
	<div class="flex space-x-4">
		<Day
			v-model="day"
			:days="daysNumber"
		/>
		<Month
			:months="months"
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
	const months = [
		"january",
		"february",
		"march",
		"april",
		"may",
		"june",
		"july",
		"august",
		"september",
		"october",
		"november",
		"december",
	];

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
	const legalYears = computed(() => {
		const currentYear = new Date().getFullYear();
		const _years = [];

		for (let i = currentYear - 18; i >= currentYear - 70; i--) {
			_years.push(i);
		}
		return _years;
	});

	const daysNumber = computed(() => {
		return range(1, new Date(year.value, month.value, 0).getDate());
	});

	const emits = defineEmits(["update:modelValue"]);

	watch(date, (value) => emits("update:modelValue", value.str));
</script>

<style scoped></style>
