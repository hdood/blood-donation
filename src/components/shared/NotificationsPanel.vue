<template>
	<div class="">
		<Popover
			v-slot="{ open }"
			class="relative"
		>
			<PopoverButton
				class="focus:outline-none mt-2 relative dark:text-white"
			>
				<div
					class="rounded-full h-3 w-3 top-0 right-0 absolute bg-indigo-600 animate-bounce"
					v-if="notEmpty"
				></div>
				<BellIcon
					class="ml-2 h-7 w-7 transition duration-150 ease-in-out group-hover:text-opacity-80"
					aria-hidden="true"
				/>
			</PopoverButton>

			<transition
				enter-active-class="transition duration-200 ease-out"
				enter-from-class="translate-y-1 opacity-0"
				enter-to-class="translate-y-0 opacity-100"
				leave-active-class="transition duration-150 ease-in"
				leave-from-class="translate-y-0 opacity-100"
				leave-to-class="translate-y-1 opacity-0"
			>
				<PopoverPanel
					class="absolute dark:text-white dark:bg-slate-500 bg-white lg:left-1/2 z-10 mt-10 lg:w-[30rem] sm:w-40 lg:-translate-x-1/2 sm:right-3 transform p-4 rounded-lg flex flex-col gap-2"
				>
					<div class="text-2xl">Notifcations</div>
					<div
						v-if="!notEmpty"
						class="text-sm text-center"
					>
						You don't have any notifications
					</div>
					<div
						v-else
						v-for="notification in notifications"
					>
						<component
							:is="parseComponentName(notification.type)"
							:notification="notification"
							:key="notifications.id"
							@delete="deleteNotification"
						/>
					</div>
				</PopoverPanel>
			</transition>
		</Popover>
	</div>
</template>

<script setup lang="ts">
	import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
	import { BellIcon } from "@heroicons/vue/24/outline";
	import axios from "axios";
	import { storeToRefs } from "pinia";
	import { onMounted, ref, defineAsyncComponent, computed } from "vue";
	import notification from "@/helpers/notification";

	const props = defineProps<{
		store: any;
	}>();

	const { fetchNotifications } = props.store;

	const { notifications } = storeToRefs(props.store);

	function parseComponentName(namespace: string) {
		const chunks = namespace.split("\\");
		const name = chunks[chunks.length - 1];

		try {
			const component = defineAsyncComponent(
				() => import(`@/components/notifications/${name}.vue`)
			);
			return component;
		} catch (error) {
			return {
				template: `could not resolve ${name}.vue are you sure this component exists`,
			};
		}
	}

	const notEmpty = computed(() => notifications?.value.length != 0);

	async function deleteNotification({ id, guard }: { id: any; guard: any }) {
		try {
			console.log({ id, guard });
			const response = await axios.delete(
				import.meta.env.VITE_API_URL + `/${guard}/notification/${id}`
			);

			await fetchNotifications();
		} catch (error: any) {
			notification(
				"Error",
				"failed to delete notification",
				"danger",
				"CloseOutline"
			);
		}
	}

	onMounted(async () => {
		await fetchNotifications?.();
	});
</script>
