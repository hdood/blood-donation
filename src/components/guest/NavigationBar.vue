<template>
	<nav
		class="mx-auto w-11/12 rounded-lg mt-3 flex items-center px-6 justify-between h-20 bg-secondary dark:bg-slate-500"
		:dir="i18n.locale.value == 'ar' ? 'rtl' : 'ltr'"
	>
		<div class="flex gap-16 items-center">
			<div>
				<Logo class="w-14 h-14" />
			</div>
			<div class="flex gap-8 dark:text-white font-medium text-lg">
				<NavigationBarLink to="/donor/register">
					{{ t("guest.donate") }}
				</NavigationBarLink>
				<NavigationBarLink to="/patient/register">{{
					t("guest.getBlood")
				}}</NavigationBarLink>

				<NavigationBarLink to="#benefits">{{
					t("guest.bloodDonationBenifits")
				}}</NavigationBarLink>
			</div>
		</div>
		<div
			class="gap-6 flex items-center"
			v-if="!authenticated"
		>
			<RouterLink to="/donor/login">
				<Button
					class="h-10 px-5"
					type="primary"
				>
					{{ t("guest.login") }}
				</Button>
			</RouterLink>

			<RouterLink to="/donor/register">
				<Button
					class="h-10 px-5"
					type="primary"
				>
					{{ t("guest.signUp") }}
				</Button>
			</RouterLink>
		</div>
		<div
			v-else
			class="gap-6 flex items-center"
		>
			<RouterLink to="/donor">
				<Button
					class="h-10 px-5"
					type="primary"
				>
					{{ t("guest.dashboard") }}
				</Button>
			</RouterLink>

			<Button
				class="h-10 px-5"
				@click="logout($router)"
				type="primary"
			>
				{{ t("guest.logout") }}
			</Button>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import Logo from "@/icons/Logo.vue";
	import NavigationBarLink from "./NavigationBarLink.vue";
	import Button from "@/components/shared/Button.vue";
	import { useI18n } from "vue-i18n";
	import useDonorAuthStore from "@/stores/donor/auth";
	import { storeToRefs } from "pinia";

	const { authenticated } = storeToRefs(useDonorAuthStore());
	const { logout } = useDonorAuthStore();
	const i18n = useI18n();
	const { t } = i18n;
</script>

<style scoped></style>
