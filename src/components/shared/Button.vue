<template>
	<button :class="button({ type: props.type })">
		<Loader v-if="props.loading" />
		<div v-else>
			<component
				v-if="props.icon"
				:is="props.icon"
			/>
			<span>
				<slot />
			</span>
		</div>
	</button>
</template>

<script setup lang="ts">
	import Loader from "./Loader.vue";
	import { cva, type VariantProps } from "class-variance-authority";

	const button = cva(["rounded-md  focus:outline-none  "], {
		variants: {
			type: {
				disabled: ["bg-gray-200 cursor-not-allowed"],
				"danger-light": [
					"bg-gradient-to-r from-red-200 to-red-300  dark:from-red-600 dark:to-red-700 dark:fill-red-100  fill-red-700 text-red-700  dark:text-white  active:translate-y-1 focus:ring-4 focus:ring-rose-300 transition-all",
				],
				danger: [
					"bg-red-600 dark:bg-red-200 dark:fill-red-100  fill-white text-white   active:translate-y-1 focus:ring-4 focus:ring-rose-300 transition-all",
				],
				success:
					"bg-emerald-400	 dark:bg-emerald-600 dark:fill-emerald-100 fill-green-700 text-white active:translate-y-1 focus:ring-4 focus:ring-emerald-300 transition-all",
				"light-success":
					"bg-gradient-to-r from-green-200 to-green-300  dark:from-green-600 dark:to-green-700 dark:fill-emerald-100 fill-green-600 text-green-600 dark:text-white  active:translate-y-1 focus:ring-4 focus:ring-emerald-300 transition-all",
				info: "bg-gradient-to-r from-blue-200 to-blue-300  dark:from-blue-600 dark:to-blue-700 dark:fill-blue-100 fill-blue-700 text-blue-900 dark:text-white  active:translate-y-1 focus:ring-4 focus:ring-blue-300 transition-all",
				primary:
					"bg-gradient-to-r from-indigo-600 to-indigo-700 fill-white active:translate-y-1 focus:ring-4 focus:ring-indigo-300 transition-all active:bg-indigo-900 text-white",

				"card-danger":
					"bg-white fill-white active:translate-y-1 transition-all text-red-900 focus:ring-indigo-300 ",
				"card-info":
					"bg-white fill-white active:translate-y-1 transition-all text-blue-900 focus:ring-indigo-300 ",
			},
		},
	});
	type Props = Required<VariantProps<typeof button>>;

	const props = defineProps<{
		type: Props["type"];
		icon?: string;
		loading?: boolean;
	}>();
</script>

<style scoped></style>
