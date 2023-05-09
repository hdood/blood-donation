<template>
	<Table
		:data="donations"
		:fields="['Date', 'Location', 'Amount', 'type']"
		v-slot="{ row }"
		class="lg:w-full sm:w-96"
	>
		<TableRow
			class="h-12"
			v-if="donations"
			:row="row"
			:key="row.id"
			:fields="['date', 'location', 'amount']"
		>
			<td>
				{{ donationToString(row.id) }}
			</td>
		</TableRow>

		<tr v-else>
			<td>You dont have any donations</td>
			<td>book an appointment to donate</td>
		</tr>
	</Table>
	<div
		class="text-center mt-4 text-lg"
		v-if="empty"
	>
		You dont have any donations
	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref, computed } from "vue";
	import Table from "@/components/shared/Table.vue";
	import axios from "axios";
	import TableRow from "@/components/shared/TableRow.vue";
	import notification from "@/helpers/notification";
	import donationToString from "@/helpers/DonationTypeLiteral";

	const donations: any = ref([]);

	onMounted(async () => {
		try {
			const { data } = await axios.get(
				import.meta.env.VITE_API_URL + "/donor/donations"
			);

			donations.value = data;
		} catch (error) {
			notification(
				"Error",
				"failed to delete user",
				"danger",
				"CloseOutline"
			);
		}
	});

	const empty = computed(() => Object.keys(donations.value).length == 0);
</script>

<style scoped></style>
