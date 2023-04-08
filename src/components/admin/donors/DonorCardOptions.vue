<template>
	<Menu>
		<MenuButton class="float-right"
			><MenuIcon class="h-5 w-5 dark:fill-white"
		/></MenuButton>

		<transition
			enter-active-class="transition-all"
			leave-active-class="transition-all"
			enter-from-class="opacity-0 translate-y-4"
			leave-to-class="opacity-0 translate-y-4"
		>
			<MenuItems
				class="flex flex-col gap-4 bg-white p-2 rounded-lg mt-4 shadow w-40"
			>
				<MenuItem
					v-slot="{ active }"
					@click="toggleDeleteDialog"
					class="rounded-lg"
				>
					<button
						class="p-2 text-left flex items-center gap-4"
						:class="{ 'bg-red-100 text-red-900': active }"
					>
						<DeleteIcon
							class="w-4 h-4 inline"
							:class="[active && 'fill-red-900']"
						/>
						Delete
					</button>
				</MenuItem>

				<MenuItem
					v-slot="{ active }"
					class="rounded-lg"
				>
					<button
						class="p-2 text-left flex items-center gap-4"
						:class="{ 'bg-blue-100 text-blue-700': active }"
						@click="edit"
					>
						<EditIcon
							class="w-4 h-4 inline"
							:class="[active && 'fill-blue-700']"
						/>
						Edit
					</button>
				</MenuItem>
			</MenuItems>
		</transition>
	</Menu>
</template>

<script setup lang="ts">
	import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
	import MenuIcon from "@/icons/MenuIcon.vue";
	import EditIcon from "@/icons/EditIcon.vue";
	import DeleteIcon from "@/icons/DeleteIcon.vue";
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";

	const { editing, selectedDonor } = storeToRefs(useDonorsStore());
	let { tempDonor, toggleDeleteDialog } = useDonorsStore();

	function edit() {
		editing.value = true;
	}
</script>

<style></style>
