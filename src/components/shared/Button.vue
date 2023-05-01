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

	const button = cva(["rounded-md  focus:outline-none"], {
		variants: {
			type: {
				primary: [
					"bg-indigo-400 dark:bg-indigo-800/70 fill-white  active:translate-y-1 focus:ring-4 focus:ring-indigo-300 transition-all active:bg-indigo-900 text-white",
				],
				disabled: ["bg-gray-200 cursor-not-allowed"],
				"danger-light": [
					"bg-red-200 dark:bg-red-600 dark:fill-red-100  fill-red-700 text-red-700   active:translate-y-1 focus:ring-4 focus:ring-rose-300 transition-all",
				],
				danger: [
					"bg-red-600 dark:bg-red-200 dark:fill-red-100  fill-white text-white   active:translate-y-1 focus:ring-4 focus:ring-rose-300 transition-all",
				],
				success:
					"bg-emerald-400	 dark:bg-emerald-600 dark:fill-emerald-100 fill-green-700 text-white active:translate-y-1 focus:ring-4 focus:ring-emerald-300 transition-all",
				"light-success":
					"bg-emerald-200	 dark:bg-emerald-600 dark:fill-emerald-100 fill-green-600 text-green-200  active:translate-y-1 focus:ring-4 focus:ring-emerald-300 transition-all",
				info: "bg-blue-200  dark:bg-blue-600 dark:fill-blue-100 fill-blue-700 text-emerald-700 active:translate-y-1 focus:ring-4 focus:ring-blue-300 transition-all",
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
