<template>
	<div
		class="flex flex-col space-y-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"
	>
		<div class="w-full space-y-4">
			<div class="flex rounded-xl gap-3 bg-white px-2 w-64 h-10">
				<input
					type="text"
					name="request-search"
					id="request-search"
					class="focus:outline-none p-1 w-full"
					placeholder="search for request"
					@input="search"
				/>
			</div>
			<Table
				:data="requests"
				:fields="['name', 'age', 'bloodGroup', 'address', '']"
				v-slot="{ row }"
				class="w-full"
			>
				<TableRow
					:row="row"
					:key="row.id"
					:fields="['name', 'age', 'bloodGroupString', 'address']"
				>
					<td class="space-x-3">
						<Button
							type="primary"
							class="p-1"
							@click="toggleAcceptAndSelect(row)"
						>
							<UserPlusIcon class="w-6 h-6" />
						</Button>
						<Button
							class="p-1 rounded-sm"
							type="danger-light"
							@click="toggleDeleteAndSelect(row)"
						>
							<TrashIcon class="w-6 h-6" />
						</Button>
					</td>
				</TableRow>
			</Table>
			<div class="flex justify-end w-full">
				<TailwindPagination
					class="self-end gap-6 items-center space-x-3 dark:text-white"
					:data="paginationData"
					@pagination-change-page="fetchRequests"
					item-classes="border-indigo-600  rounded-lg"
					active-classes="bg-indigo-600 border-indigo-600  rounded-lg text-white"
				/>
			</div>
			<DeleteRequestModal
				@close="toggleDeleteModal"
				:show="deleteModal"
				@delete="deleteRequest"
			/>
			<AcceptRequestModal
				:show="acceptModal"
				@close="toggleAcceptModal"
				@accept="acceptRequest"
			></AcceptRequestModal>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import useRequestsStore from "@/stores/admin/requests";
	import Table from "@/components/shared/Table.vue";
	import { storeToRefs } from "pinia";
	import TableRow from "@/components/shared/TableRow.vue";
	import Button from "@/components/shared/Button.vue";
	import DeleteRequestModal from "@/components/admin/requests/DeleteRequestModal.vue";
	import AcceptRequestModal from "@/components/admin/requests/AcceptRequestModal.vue";
	import { TailwindPagination } from "laravel-vue-pagination";
	import { useDebounceFn } from "@vueuse/core";
	import notification from "@/helpers/notification";
	import { TrashIcon } from "@heroicons/vue/20/solid";
	import { UserPlusIcon } from "@heroicons/vue/20/solid";

	const deleteModal = ref(false);
	const acceptModal = ref(false);
	const query = ref("");
	const currentRequest: any = ref({});
	const { paginationData, requests } = storeToRefs(useRequestsStore());
	const { fetchRequests } = useRequestsStore();

	const toggleDeleteModal = () => (deleteModal.value = !deleteModal.value);
	const toggleAcceptModal = () => (acceptModal.value = !acceptModal.value);

	function toggleDeleteAndSelect(request: any) {
		currentRequest.value = request;
		toggleDeleteModal();
	}

	function toggleAcceptAndSelect(request: any) {
		currentRequest.value = request;
		toggleAcceptModal();
	}

	const search = useDebounceFn(
		(e) => fetchRequests(undefined, e.target.value),
		500
	);

	async function acceptRequest() {
		try {
			await currentRequest.value.toggleActiveState();

			toggleAcceptModal();
			await fetchRequests(paginationData.value.current_page);

			notification(
				"Success",
				"Request Accepted Successfully",
				"success",
				"Checkmark"
			);
		} catch (error: any) {
			toggleAcceptModal();
			notification(
				"Error",
				"failed to accept request",
				"danger",
				"CloseOutline"
			);
		}
	}

	async function deleteRequest() {
		try {
			await currentRequest.value.delete();

			toggleDeleteModal();
			await fetchRequests(paginationData.value.current_page);

			notification(
				"Success",
				"Request Deleted Successfully",
				"success",
				"Checkmark"
			);
		} catch (error: any) {
			toggleDeleteModal();
			notification(
				"Error",
				"failed to delete request",
				"danger",
				"CloseOutline"
			);
		}
	}

	onMounted(async () => {
		await fetchRequests();
	});
</script>

<style scoped></style>
