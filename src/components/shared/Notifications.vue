<template>
	<div class="absolute top-10 right-10 flex flex-col gap-4 w-96">
		<TransitionGroup
			enter-active-class="transition-all duration-300"
			leave-active-class="transition-all duration-300"
			leave-to-class="translate-x-4 opacity-0"
			enter-from-class="translate-x-4 opacity-0"
		>
			<Notification
				v-for="notification in notifications"
				:type="notification.type"
				:title="notification.title"
				:icon="notification.icon"
				:key="notification"
			>
				{{ notification.content }}
			</Notification>
		</TransitionGroup>
	</div>
</template>

<script setup lang="ts">
	import useNotificationsStore from "@/stores/notifcations";
	import { storeToRefs } from "pinia";
	import Notification from "./Notification.vue";

	const { notifications } = storeToRefs(useNotificationsStore());
</script>

<style scoped></style>
