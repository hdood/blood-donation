<template>
	<div>
		<Table
			:data="donations"
			:fields="['date', 'location']"
			v-slot="{ row }"
		>
			<TableRow
				:row="row"
				:fields="['date', 'location']"
				:active="false"
			/>
		</Table>
		<div
			v-if="!donations"
			class="text-white text-center text-2xl mt-5"
		>
			You don't have any donation
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import Table from "@/components/shared/Table.vue";
	import axios from "axios";
	import TableRow from "@/components/shared/TableRow.vue";

	const donations = ref({});

	onMounted(async () => {
		const { data: _donations } = await axios.get(
			import.meta.env.VITE_API_URL + "/donor/donations"
		);
		if (Object.keys(_donations).length > 0) {
			donations.value = _donations;
			return;
		}
		donations.value = false;
	});
</script>

<style scoped></style>
