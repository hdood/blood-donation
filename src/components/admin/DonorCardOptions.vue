<template>
	<Menu>
		<MenuButton class="float-right"
			><MenuIcon class="h-5 w-5"
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
				<MenuItem v-slot="{ active }">
					<button
						class="p-2 rounded text-left flex items-center gap-4"
						:class="{ 'bg-indigo-700 text-white': active }"
					>
						<DeleteIcon
							class="w-4 h-4 inline"
							:class="[active && 'fill-white']"
						/>
						Delete
					</button>
				</MenuItem>
				<MenuItem v-slot="{ active }">
					<button
						class="p-2 rounded text-left flex items-center gap-4"
						:class="{ 'bg-indigo-700 text-white': active }"
						@click="edit"
					>
						<EditIcon
							class="w-4 h-4 inline"
							:class="[active && 'fill-white']"
						/>
						Edit
					</button>
				</MenuItem>
			</MenuItems>
		</transition>
	</Menu>
</template>

<script setup>
	import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
	import MenuIcon from "@/icons/MenuIcon.vue";
	import EditIcon from "@/icons/EditIcon.vue";
	import DeleteIcon from "@/icons/DeleteIcon.vue";
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";

	const { editing } = storeToRefs(useDonorsStore());

	function edit() {
		editing.value = !editing.value;
	}
</script>

<style></style>
