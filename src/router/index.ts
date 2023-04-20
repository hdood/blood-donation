import { createRouter, createWebHistory } from "vue-router";
import adminGuard from "./guards/adminGuard";
import donorGuard from "./guards/donorGuard";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: () => import("../pages/guest/Index.vue"),
			name: "home",
		},
		{
			path: "/admin",
			component: () => import("../pages/admin/Index.vue"),
			beforeEnter: adminGuard,
			children: [
				{
					path: "",
					component: () => import("../pages/admin/Dashboard.vue"),
					name: "admin-dashboard",
				},
				{
					path: "donors",
					component: () => import("../pages/admin/Donors.vue"),
					name: "admin-donors",
				},
				{
					path: "patients",
					component: () => import("../pages/admin/Patients.vue"),
					name: "admin-patients",
				},
				{
					path: "conversations",
					component: () => import("@/pages/Conversations.vue"),
					name: "admin-conversations",
				},
			],
		},
		{
			path: "/admin/login",
			component: () => import("../pages/admin/Login.vue"),
			beforeEnter: adminGuard,
			name: "admin-login",
		},
		{
			path: "/admin/register",
			component: () => import("../pages/admin/Register.vue"),
			name: "admin-register",
		},
		{
			path: "/donor",
			component: () => import("../pages/donor/Index.vue"),
			beforeEnter: donorGuard,
			children: [
				{
					path: "",
					component: () =>
						import("@/pages/donor/DonationsHistory.vue"),
					name: "donor-home",
				},
			],
		},
		{
			path: "/donor/login",
			component: () => import("../pages/guest/DonorLogin.vue"),
			name: "donor-login",
			beforeEnter: donorGuard,
		},
	],
});

export default router;
