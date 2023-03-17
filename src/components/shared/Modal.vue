<template>
	<transition name="modal">
		<div
			class="absolute grid place-items-center top-0 left-0 h-full w-screen"
			v-if="show"
		>
			<div
				@click="emits('close')"
				class="h-full w-full absolute top-0 left-0 bg-black opacity-25 fade"
			></div>
			<div
				:style="{ height: height + 'rem', width: width + 'rem' }"
				class="shadow-lg rounded-lg dark:text-white bg-white dark:bg-slate-500 modal z-10"
			>
				<div>
					<slot name="head"></slot>
					<img class="float-right" src="" alt="" />
				</div>
				<div>
					<slot name="body"></slot>
				</div>
				<div>
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
	import { toRefs } from "vue";

	const emits = defineEmits(["close"]);
	const props = defineProps({
		height: {
			type: String,
			default: "10",
		},
		width: {
			type: String,
			default: "24",
		},
		show: {
			type: Boolean,
		},
	});
	const { width, height, show } = toRefs(props);
</script>

<style>
	.modal-enter-active .modal,
	.modal-leave-active .modal {
		transition: all 200ms ease-in-out;
	}

	.modal-enter-from .modal,
	.modal-leave-to .modal {
		transform: translateY(30px);
		opacity: 0;
	}
	.modal-enter-active .fade,
	.modal-leave-active .fade {
		transition: all 200ms ease-in-out;
	}

	.modal-enter-from .fade,
	.modal-leave-to .fade {
		opacity: 0;
	}
</style>
