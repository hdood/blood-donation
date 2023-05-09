<template>
	<div class="p-14 flex flex-col gap-3">
		<div class="text-2xl font-medium dark:text-slate-200 mb-4">
			Appointments
		</div>
		<TabGroup>
			<TabList
				class="p-1 inline-flex w-60 gap-3 bg-white justify-between px-4 rounded-lg dark:bg-slate-500 dark:text-slate-200"
			>
				<Tab
					v-slot="{ selected }"
					class="focus:outline-none active:outline-none"
				>
					<div
						class="rounded-lg p-2"
						:class="[
							selected
								? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white'
								: 'hover:bg-slate-400',
						]"
					>
						Requests
					</div>
				</Tab>
				<Tab
					v-slot="{ selected }"
					class="focus:outline-none active:outline-none"
				>
					<div
						class="rounded-lg p-2 focus:outline-none"
						:class="[
							selected
								? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white'
								: 'hover:bg-slate-400',
						]"
					>
						Accepted
					</div>
				</Tab>
			</TabList>
			<TabPanels class="mt-2 block">
				<TransitionRoot
					:show="true"
					enter="transition-opacity duration-75"
					enter-from="opacity-0"
					enter-to="opacity-100"
					leave="transition-opacity duration-150"
					leave-from="opacity-100"
					leave-to="opacity-0"
				>
					<TransitionChild
						enter-active-class="transition-all duration-300"
						leave-active-class="transition-all duration-300"
						enter-from-class="opacity-0 "
						leave-to-class="opacity-0 "
					>
						<TabPanel><PendingBloodRequests /> </TabPanel>
					</TransitionChild>

					<TransitionChild
						enter-active-class="transition-all duration-300"
						leave-active-class="transition-all duration-300"
						enter-from-class="opacity-0 "
						leave-to-class="opacity-0 "
					>
						<TabPanel> <AcceptedBloodRequests /> </TabPanel>
					</TransitionChild>
				</TransitionRoot>
			</TabPanels>
		</TabGroup>
	</div>
</template>

<script setup lang="ts">
	import {
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
		TransitionRoot,
		TransitionChild,
	} from "@headlessui/vue";
	import AcceptedBloodRequests from "@/components/admin/AcceptedBloodRequests.vue";
	import PendingBloodRequests from "@/components/admin/PendingBloodRequests.vue";
</script>
