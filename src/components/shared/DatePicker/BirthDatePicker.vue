<template>
	<div class="flex space-x-4">
		<Day daysNumber="2" />
		<Month />
		<Year />
	</div>
</template>

<script setup lang="ts">
	import Day from "@/components/shared/DatePicker/Day.vue";
	import Month from "@/components/shared/DatePicker/Month.vue";
	import Year from "@/components/shared/DatePicker/Year.vue";
</script>

<style scoped></style>
