<template>
	<div :class="wrapper({ type: props.type })">
		<div>
			<component
				:class="icon({ type: props.type })"
				:is="props.icon"
			/>
		</div>
		<div>
			<div class="font-medium text-lg">
				{{ props.title }}
			</div>
			<div class="text-sm">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { cva, type VariantProps } from "class-variance-authority";

	const wrapper = cva(
		["w-96 h-20 rounded-lg shadow flex py-6 px-4 items-center gap-8"],
		{
			variants: {
				type: {
					success: ["bg-green-50", "text-green-700"],
					danger: ["bg-red-50", "text-red-700"],
				},
			},
			defaultVariants: {
				type: "success",
			},
		}
	);

	const icon = cva(["w-6 h-6"], {
		variants: {
			type: {
				success: ["fill-green-700"],
				danger: ["fill-red-700"],
			},
		},
	});

	type Props = Required<VariantProps<typeof wrapper>>;

	const props = defineProps<{
		type: Props["type"];
		title: string;
		icon: string;
	}>();
</script>

<style scoped></style>
