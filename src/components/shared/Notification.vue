<template>
	<div class="absolute top-10 right-10 flex flex-col gap-4">
		<TransitionGroup
			enter-active-class="transition-all "
			leave-active-class="transition-all "
			leave-to-class="translate-x-4 opacity-0"
			enter-from-class="translate-x-4 opacity-0"
		>
			<div
				v-for="notification in notifications"
				class="w-full bg-white rounded-lg shadow-lg p-2 flex gap-3 items-center"
				:key="notification"
			>
				<div>
					<Checkmark class="h-4 w-4 fill-green-400" />
				</div>
				<div>
					{{ notification.content }}
				</div>
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup lang="ts">
	import useNotificationsStore from "@/stores/notifcations";
	import { storeToRefs } from "pinia";

	const { notifications } = storeToRefs(useNotificationsStore());
</script>

<style scoped></style>
