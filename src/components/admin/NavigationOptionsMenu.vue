<template>
	<Menu
		as="div"
		class="relative inline-block text-left"
	>
		<MenuButton class="dark:fill-white flex items-center gap-1+">
			<span class="dark:text-white/80">
				{{ user.name }}
			</span>
			<CheveronDown class="w-5 h-5" />
		</MenuButton>

		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform translate-y-4 opacity-0"
			leave-active-class="transition duration-75 ease-in"
			leave-to-class="transform scale-95 translate-y-4 opacity-0"
		>
			<MenuItems
				class="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			>
				<div class="px-1 py-1">
					<MenuItem
						v-slot="{ active }"
						@click="logout(router)"
					>
						<button
							:class="[
								active
									? 'bg-indigo-400 text-white'
									: 'text-gray-900',
								'group flex w-full items-center rounded-md px-2 py-2 text-sm',
							]"
						>
							<StandBy
								class="mr-2 h-5 w-5"
								:class="[active && 'fill-white']"
								aria-hidden="true"
							/>
							Logout
						</button>
					</MenuItem>
				</div>
			</MenuItems>
		</transition>
	</Menu>
</template>

<script setup lang="ts">
	import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
	import { useRouter } from "vue-router";

	const props = defineProps<{
		logout: Function;
		user: any;
	}>();

	const { logout, user } = props;

	const router = useRouter();
</script>
