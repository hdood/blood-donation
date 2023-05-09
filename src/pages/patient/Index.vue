<template>
	<AdminLayout
		:store="authStore"
		no-side-bar
	>
		<div class="p-16 flex flex-col gap-2">
			<Button
				@click="showModal = true"
				type="primary"
				class="h-10 px-2 self-end"
				v-if="state === ''"
				>Make A Request</Button
			>
			<div
				v-else
				class="bg-gradient-to-l from-blue-400 to-blue-500 p-4 rounded-lg space-y-4 w-full flex justify-between items-center"
			>
				<div class="flex flex-col gap-3">
					<div
						class="text-2xl font-medium text-white flex items-center gap-2"
					>
						<ClockIcon class="w-8 h-8" />
						Your Last Request Is Pending
					</div>
					<div class="font-medium text-white">
						Your Request is pending you'll receive a notification
						when it's accepted.
					</div>
				</div>
				<Button
					class="w-40 h-10"
					type="card-danger"
					@click="cancelLastRequest"
					>Cancel Request</Button
				>
			</div>
			<div>
				<BloodRequestsTable />
			</div>
		</div>
		<MakeRequestModal
			@close="showModal = false"
			:show="showModal"
			@success="getLastRequest"
		/>
	</AdminLayout>
</template>

<script setup lang="ts">
	import AdminLayout from "@/components/shared/default.vue";
	import useAuthStore from "@/stores/patient/auth";
	import Button from "@/components/shared/Button.vue";
	import MakeRequestModal from "@/components/patient/MakeRequestModal.vue";
	import BloodRequestsTable from "@/components/patient/BloodRequestsTable.vue";
	import { ref, onMounted } from "vue";
	import { ClockIcon } from "@heroicons/vue/20/solid";
	import axios from "axios";
	import notification from "@/helpers/notification";
	const authStore = useAuthStore();
	const showModal = ref(false);
	const state = ref("");
	const lastRequest: any = ref({});

	async function cancelLastRequest() {
		try {
			const response = axios.delete(
				import.meta.env.VITE_API_URL +
					`/patient/request/${lastRequest.value.id}`
			);
			await getLastRequest();
			notification(
				"Success",
				"request deleted successfully",
				"success",
				"Checkmark"
			);
		} catch (error: any) {
			notification(
				"Error",
				"failed to delete request",
				"danger",
				"CloseOutline"
			);
		}
	}

	async function getLastRequest() {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/patient/last-request"
			);

			state.value = response.data.state;
			lastRequest.value = response.data.request;
		} catch (error: any) {
			notification(
				"Error",
				"failed to fetch last request state",
				"danger",
				"CloseOutline"
			);
		}
	}

	onMounted(async () => {
		await getLastRequest();
	});
</script>

<style scoped></style>
