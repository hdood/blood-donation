import { createRouter, createWebHistory } from "vue-router";
import adminGuard from "./guards/adminGuard";

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
			],
		},
		{
			path: "/admin/login",
			component: () => import("../pages/admin/Login.vue"),
			beforeEnter: adminGuard,
			name: "admin-login",
		},
		{
			path: "/donor",
			component: () => import("../pages/donor/Index.vue"),
		},
	],
});

export default router;
