<template>
	<div class="flex space-x-4">
		<Day
			v-model="day"
			:daysNumber="daysNumber"
		/>
		<Month v-model="month" />
		<Year v-model="year" />
	</div>
</template>

<script setup lang="ts">
	import Day from "@/components/shared/DatePicker/Day.vue";
	import Month from "@/components/shared/DatePicker/Month.vue";
	import Year from "@/components/shared/DatePicker/Year.vue";
	import { computed, ref, watch } from "vue";

	const date = computed(() => {
		if (day.value == "" || month.value == "" || year.value == "")
			return false;
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

	const day = ref("");
	const month = ref("");
	const year = ref("");

	const daysNumber = computed(() => {
		return new Date(
			parseInt(year.value),
			parseFloat(month.value),
			0
		).getDate();
	});

	const emits = defineEmits(["update:modelValue"]);

	watch(date, (value) => emits("update:modelValue", value.str));
</script>

<style scoped></style>
