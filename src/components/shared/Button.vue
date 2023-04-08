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

	const button = cva(["rounded-md "], {
		variants: {
			type: {
				primary: [
					"bg-indigo-600 hover:bg-indigo-500 active:translate-y-1 focus:ring-4 focus:ring-blue-300 transition-all active:bg-indigo-900 text-white",
				],
				disabled: ["bg-gray-200 cursor-not-allowed"],
				danger: [
					"bg-red-600 hover:bg-red-500 active:translate-y-1 focus:ring-4 focus:ring-rose-300 transition-all active:bg-red-900 text-white",
				],
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
