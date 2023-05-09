<template>
	<div class="p-5 bg-secondary rounded-xl dark:bg-slate-600 relative">
		<div class="space-y-5">
			<div class="flex space-x-5 justify-end">
				<Button
					class="w-14 h-10 flex items-center justify-center"
					@click="toggleDeleteDialog"
					type="danger-light"
				>
					<TrashIcon class="w-6 h-6" />
				</Button>
				<Button
					class="w-14 h-10 flex items-center justify-center"
					type="light-success"
					@click="toggleUpdatePatientModal"
				>
					<PencilIcon class="w-6 h-6" />
				</Button>
			</div>
		</div>
		<div class="flex items-center gap-8">
			<div class="dark:text-white space-y-2">
				<div>
					<span class="text-xl block">
						{{ selectedPatient.name }}
					</span>
					<span
						class="text-sm text-center p-1 rounded-lg cursor-pointer"
						:class="[
							selectedPatient.active
								? 'bg-emerald-300 text-emerald-700 '
								: 'bg-rose-300 text-rose-700 ',
						]"
						@click="toggleActive"
					>
						{{ !selectedPatient.active ? "in" : "" }}active
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
		<div class="mt-4 dark:text-white space-y-4">
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
	import { PencilIcon } from "@heroicons/vue/20/solid";
	import { TrashIcon } from "@heroicons/vue/20/solid";

	const { selectedPatient } = storeToRefs(usePatientsStore());

	const { toggleDeleteDialog, toggleUpdatePatientModal, toggleActive } =
		usePatientsStore();
</script>

<style scoped></style>
