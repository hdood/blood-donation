<template>
	<div class="w-full h-full p-12 flex gap-6">
		<div
			class="space-y-6 basis-1/4 bg-secondary dark:bg-slate-600 rounded-lg p-2 dark:text-white"
		>
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
		</div>

		<!--  Messages -->

		<div class="basis-3/4 gap-4 flex flex-col rounded-lg p-1">
			<div
				class="basis-2/12 w-full px-6 flex items-center gap-7 relative bg-secondary dark:bg-slate-600 rounded-lg"
			>
				<img
					src="/doctor.jpeg"
					class="rounded-full w-12 h-12 font-medium"
					alt=""
				/>
				<span class="text-xl dark:text-white font-medium"
					>Mahdi Bouguerzi</span
				>
				<DotsHorizontalTriple
					class="w-6 h-6 cursor-pointer absolute right-4 dark:fill-white"
				/>
			</div>
			<div
				class="basis-9/12 gap-2 px-4 py-2 flex flex-col overflow-y-scroll rounded-lg bg-secondary dark:bg-slate-600"
			>
				<div
					class="self-end bg-indigo-500 dark:bg-indigo-600 text-white p-2 rounded-lg w-fit"
				>
					Hello there
				</div>
				<div
					class="self-end bg-indigo-500 dark:bg-indigo-600 text-white p-2 rounded-lg w-fit"
				>
					Hello there
				</div>
				<div class="bg-gray-200 w-fit p-2 rounded-lg">
					Hope you doing well
				</div>
				<div
					class="self-end bg-indigo-500 dark:bg-indigo-600 text-white p-2 rounded-lg w-fit"
				>
					Hello there
				</div>
				<div class="bg-gray-200 w-fit p-2 rounded-lg">
					Hope you doing well
				</div>
				<div
					class="self-end bg-indigo-500 dark:bg-indigo-600 text-white p-2 rounded-lg w-fit"
				>
					Hello there
				</div>
				<div class="bg-gray-200 w-fit p-2 rounded-lg">
					Hope you doing well
				</div>
				<div
					class="self-end bg-indigo-500 dark:bg-indigo-600 text-white p-2 rounded-lg w-fit"
				>
					Hello there
				</div>
				<div class="bg-gray-200 w-fit p-2 rounded-lg">
					Hope you doing well
				</div>
				<div
					class="self-end bg-indigo-500 dark:bg-indigo-600 text-white p-2 rounded-lg w-fit"
				>
					Hello there
				</div>
				<div class="bg-gray-200 w-fit p-2 rounded-lg">
					Hope you doing well
				</div>
				<div
					class="self-end bg-indigo-500 dark:bg-indigo-600 text-white p-2 rounded-lg w-fit"
				>
					Hello there
				</div>
				<div class="bg-gray-200 w-fit p-2 rounded-lg">
					Hope you doing well
				</div>
			</div>
			<div
				class="flex items-center justify-between px-8 h-16 rounded-lg bg-secondary dark:bg-slate-600 dark:text-white"
			>
				<input
					class="focus:outline-none text-lg bg-secondary dark:bg-slate-600 w-full"
					type="text"
					name="message"
				/>
				<Send class="w-8 h-8 fill-indigo-500 cursor-pointer" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import UserCard from "@/components/conversaton/UserCard.vue";
</script>

<style scoped></style>
