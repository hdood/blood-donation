<template>
	<div class="p-5 bg-secondary rounded-xl dark:bg-slate-600 relative">
		<div class="space-y-5">
			<div class="flex space-x-5 justify-end">
				<Button
					class="w-14 h-10 flex items-center justify-center"
					@click="toggleDeleteDialog"
					type="danger-light"
				>
					<Trash class="w-6 h-6" />
				</Button>
				<Button
					class="w-14 h-10 flex items-center justify-center"
					type="light-success"
					@click="toggleUpdatePatientModal"
				>
					<EditPencil class="w-6 h-6" />
				</Button>
			</div>
		</div>
		<div class="flex items-center gap-8">
			<img
				src="/donor_placeholder.png"
				class="rounded-xl overflow-hidden w-52"
				alt=""
			/>
			<div class="dark:text-white space-y-2">
				<div>
					<span class="text-xl block">
						{{ selectedPatient.name }}
					</span>
				</div>
				<div>
					<span class="uppercase">
						{{ selectedPatient.gender }}
					</span>
				</div>
				<div>
					<span>
						{{ selectedPatient.phone }}
					</span>
				</div>
				<div>
					<span class="opacity-90">
						{{ selectedPatient.email }}
					</span>
				</div>
			</div>
		</div>
		<div class="mt-4 px-8 dark:text-white space-y-4">
			<div>
				<span>
					{{ selectedPatient.bloodGroupString }}
				</span>
			</div>
			<div>
				<span> Born in : {{ selectedPatient.dob }} </span>
			</div>
			<div>
				<span class="block opacity-80 h-12">
					{{ selectedPatient.address }}
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import usePatientsStore from "@/stores/admin/patients";
	import { storeToRefs } from "pinia";
	import Button from "@/components/shared/Button.vue";

	const { selectedPatient } = storeToRefs(usePatientsStore());

	const { toggleDeleteDialog, toggleUpdatePatientModal } = usePatientsStore();
</script>

<style scoped></style>
