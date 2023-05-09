<template>
	<Layout>
		<div
			class="flex w-11/12 justify-between mx-auto mt-10 overflow-hidden"
			:dir="i18n.locale.value == 'ar' ? 'rtl' : 'ltr'"
		>
			<div class="dark:text-white p-10 w-[45rem]">
				<div
					class="text-6xl font-medium"
					:class="[i18n.locale.value == 'ar' ? 'mt-20' : 'mt-12']"
				>
					{{ t("guest.heroTitle") }}
				</div>
				<div
					class="w-[36rem] mt-6"
					:class="[i18n.locale.value == 'ar' && 'leading-8']"
				>
					{{ t("guest.heroDescription") }}
				</div>
				<div class="mt-6 flex gap-6">
					<RouterLink to="/donor/register">
						<Button
							type="primary"
							class="h-10 w-40 text-lg flex items-center justify-center"
						>
							<div class="flex items-center gap-2">
								<span class="block">{{
									t("guest.donateNow")
								}}</span>
							</div>
						</Button>
					</RouterLink>
					<RouterLink to="/patient/register">
						<Button
							type="success"
							class="h-10 w-40 text-lg flex items-center justify-center"
						>
							<div class="flex items-center gap-2">
								<span class="block">{{
									t("guest.needBlood")
								}}</span>
							</div>
						</Button>
					</RouterLink>
				</div>
			</div>

			<div class="p-10 w-[30-rem]">
				<img
					src="/sideImage.webp"
					class="h-[30rem] rounded-lg"
					alt="blood donation"
				/>
			</div>
		</div>
		<div
			class="w-11/12 bg-gradient-to-r from-indigo-500 to-indigo-700 py-10 rounded-tr-lg rounded-br-lg px-28 flex justify-between items-center gap-20"
			:dir="i18n.locale.value == 'ar' ? 'rtl' : 'ltr'"
		>
			<div class="flex flex-col gap-3">
				<div class="text-3xl text-white font-medium">
					{{ t("guest.hero") }}
				</div>
				<div class="text-white">
					{{ t("guest.cardDescription") }}
				</div>
			</div>
			<div>
				<RouterLink to="/donor/register">
					<Button
						class="py-2 w-28"
						type="card-info"
						>{{ t("guest.donateNow") }}</Button
					>
				</RouterLink>
			</div>
		</div>
		<div
			class="w-11/12 flex flex-col flex-wrap gap-8 mx-auto mt-10 dark:text-white bg-gray-50 dark:bg-slate-600 p-3 rounded-lg"
		>
			<div class="text-4xl text-center">
				{{ t("guest.howItWorks") }}
			</div>
			<div
				class="grid lg:grid-cols-3 gap-y-10 grid-cols-1 justify-center mt-8"
			>
				<div class="flex justify-center">
					<div class="flex flex-col items-center">
						<div
							class="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg p-2"
						>
							<UserIcon class="w-32" />
						</div>
						<div class="text-xl font-medium mt-3">
							{{ t("guest.signUp") }}
						</div>
					</div>
				</div>
				<div class="flex justify-center">
					<div class="flex flex-col items-center">
						<div
							class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-lg"
						>
							<BookOpenIcon class="w-32" />
						</div>
						<div class="text-xl font-medium mt-3">
							{{ t("guest.bookAppointment") }}
						</div>
					</div>
				</div>
				<div class="flex justify-center">
					<div class="flex flex-col items-center">
						<div
							class="bg-gradient-to-r from-rose-500 to-rose-600 text-white p-2 rounded-lg"
						>
							<HeartIcon class="w-32" />
						</div>
						<div class="text-xl font-medium mt-3">
							{{ t("guest.saveALife") }}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="w-11/12 flex flex-col gap-8 mx-auto mt-10 dark:text-white bg-gray-50 dark:bg-slate-600 p-3 rounded-lg"
			id="benefits"
		>
			<div class="text-4xl text-center">
				{{ t("guest.bloodDonationBenefits") }}
			</div>
			<div class="flex justify-center">
				<div class="flex flex-col gap-10">
					<div class="flex gap-5">
						<div class="text-7xl px-4 text-center rounded-lg">
							1
						</div>
						<div class="flex flex-col gap-3">
							<div class="text-2xl">
								{{ t("guest.benefits.SavesLives.title") }}
							</div>
							<div class="text-sm">
								{{ t("guest.benefits.SavesLives.description") }}
							</div>
						</div>
					</div>
					<div class="flex gap-5">
						<div
							class="text-7xl p-1 w-20 h-20 text-center rounded-lg"
						>
							2
						</div>
						<div class="flex flex-col gap-3">
							<div class="text-2xl">
								{{
									t("guest.benefits.ReducesHeartRisks.title")
								}}
							</div>
							<div class="text-sm">
								{{
									t(
										"guest.benefits.ReducesHeartRisks.description"
									)
								}}
							</div>
						</div>
					</div>
					<div class="flex gap-5">
						<div
							class="text-7xl p-1 w-20 h-20 text-center rounded-lg"
						>
							3
						</div>
						<div class="flex flex-col gap-3">
							<div class="text-2xl">
								{{ t("guest.benefits.BurnsCalories.title") }}
							</div>
							<div class="text-sm">
								{{
									t(
										"guest.benefits.BurnsCalories.description"
									)
								}}
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-10">
					<div class="flex gap-5">
						<div
							class="text-7xl p-1 w-20 h-20 text-center rounded-lg"
						>
							4
						</div>
						<div class="flex flex-col gap-3">
							<div class="text-2xl">
								{{ t("guest.benefits.Cancer.title") }}
							</div>
							<div class="text-sm">
								{{ t("guest.benefits.Cancer.description") }}
							</div>
						</div>
					</div>
					<div class="flex gap-5">
						<div
							class="text-7xl p-1 w-20 h-20 text-center rounded-lg"
						>
							5
						</div>
						<div class="flex flex-col gap-3">
							<div class="text-2xl">
								{{ t("guest.benefits.Supply.title") }}
							</div>
							<div class="text-sm">
								{{ t("guest.benefits.Supply.description") }}
							</div>
						</div>
					</div>
					<div class="flex gap-5">
						<div
							class="text-7xl p-1 w-20 h-20 text-center rounded-lg"
						>
							6
						</div>
						<div class="flex flex-col gap-3">
							<div class="text-2xl">
								{{ t("guest.benefits.Checkup.title") }}
							</div>
							<div class="text-sm">
								{{ t("guest.benefits.Checkup.description") }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script setup lang="ts">
	import Layout from "@/components/guest/Layout.vue";
	import Button from "@/components/shared/Button.vue";
	import { useI18n } from "vue-i18n";
	import { UserIcon } from "@heroicons/vue/24/outline";
	import { BookOpenIcon } from "@heroicons/vue/24/outline";
	import { HeartIcon } from "@heroicons/vue/24/outline";
	const i18n = useI18n();
	const { t } = i18n;
</script>

<style scoped></style>
