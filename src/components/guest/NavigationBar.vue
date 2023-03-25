<template>
	<nav
		class="mx-auto w-11/12 rounded-full flex items-center px-6 justify-between h-20 bg-secondary dark:bg-slate-500"
		:class="[i18n.locale.value == 'ar' && 'flex-row-reverse']"
	>
		<div
			class="flex space-x-16 items-center"
			:class="[
				i18n.locale.value == 'ar' &&
					'flex-row-reverse text-xl space-x-reverse',
			]"
		>
			<div>
				<Logo class="w-14 h-14" />
			</div>
			<div
				class="flex space-x-8 dark:text-white font-medium text-lg"
				:class="[
					i18n.locale.value == 'ar' &&
						'flex-row-reverse text-xl space-x-reverse',
				]"
			>
				<NavigationBarLink to="#">
					{{ t("guest.donate") }}
				</NavigationBarLink>
				<NavigationBarLink to="#">{{
					t("guest.getBlood")
				}}</NavigationBarLink>
				<NavigationBarLink to="#">{{
					t("guest.aboutUs")
				}}</NavigationBarLink>
				<NavigationBarLink to="#">{{
					t("guest.bloodDonationBenifits")
				}}</NavigationBarLink>
			</div>
		</div>
		<div
			class="space-x-6 flex"
			:class="[
				i18n.locale.value == 'ar' && 'flex-row-reverse space-x-reverse',
			]"
		>
			<RouterLink to="/">
				<button class="h-10 px-5 rounded-lg text-white bg-indigo-400">
					{{ t("guest.dashboard") }}
				</button>
			</RouterLink>
			<button
				@click="toggleLoginModal"
				class="h-10 px-5 rounded-lg text-white bg-indigo-400"
			>
				{{ t("guest.login") }}
			</button>
			<button
				class="underline hover:no-underline dark:text-white px-2 rounded-lg hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white"
				@click="arabic"
				v-if="i18n.locale.value != 'ar'"
			>
				العربية
			</button>
			<button
				class="underline hover:no-underline px-2 rounded-lg dark:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white"
				@click="english"
				v-else
			>
				English
			</button>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import useAuthStore from "@/stores/donor/auth";
	import Logo from "@/icons/Logo.vue";
	import NavigationBarLink from "./NavigationBarLink.vue";
	import { useI18n } from "vue-i18n";
	const authStore = useAuthStore();
	const { toggleLoginModal } = authStore;
	const i18n = useI18n();
	const { t } = i18n;

	function arabic() {
		i18n.locale.value = "ar";
	}
	function english() {
		i18n.locale.value = "en";
	}

	console.log(i18n.locale.value);
</script>

<style scoped></style>
