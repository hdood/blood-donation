import { createRouter, createWebHistory } from "vue-router";
import adminGuard from "./guards/adminGuard";
import donorGuard from "./guards/donorGuard";
import patientGuard from "./guards/patientGuard";
import restoreDonorState from "./guards/restoreDonorState";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: () => import("../pages/guest/Index.vue"),
			name: "home",
			beforeEnter: restoreDonorState,
			meta: {
				title: "Center de transfusion sanguine Setif",
			},
		},
		{
			path: "/admin",
			component: () => import("../pages/admin/Index.vue"),
			beforeEnter: adminGuard,
			children: [
				{
					path: "",
					component: () => import("../pages/admin/Dashboard.vue"),
					meta: {
						title: "Admin Dashboard",
					},
					name: "admin-dashboard",
				},
				{
					path: "donors",
					component: () => import("../pages/admin/Donors.vue"),
					meta: {
						title: "Manage Donors",
					},
					name: "admin-donors",
				},
				{
					path: "patients",
					component: () => import("../pages/admin/Patients.vue"),
					meta: {
						title: "Manage Patients",
					},
					name: "admin-patients",
				},
				{
					path: "requests",
					component: () => import("../pages/admin/Requests.vue"),
					meta: {
						title: "Donors Requests",
					},
					name: "admin-requests",
				},
				{
					path: "appointments",
					component: () => import("../pages/admin/Appointments.vue"),
					meta: {
						title: "Donors Appointments",
					},
					name: "admin-appointments",
				},
				{
					path: "blood-requests",
					component: () => import("../pages/admin/BloodRequests.vue"),
					meta: {
						title: "Blood Requests",
					},
					name: "admin-blood-requests",
				},
			],
		},
		{
			path: "/admin/login",
			component: () => import("../pages/admin/Login.vue"),
			beforeEnter: adminGuard,
			name: "admin-login",
			meta: {
				title: "Admin Login",
			},
		},
		{
			path: "/admin/register",
			component: () => import("../pages/admin/Register.vue"),
			name: "admin-register",
			meta: {
				title: "Admin Register",
			},
		},
		{
			path: "/donor",
			component: () => import("../pages/donor/Index.vue"),
			beforeEnter: donorGuard,
			children: [
				{
					path: "",
					component: () => import("@/pages/donor/Dashboard.vue"),
					name: "donor-dashboard",
					meta: {
						title: "Dashboard",
					},
				},
				{
					path: "/donations",
					component: () =>
						import("@/pages/donor/DonationsHistory.vue"),
					name: "donor-donations",
					meta: {
						title: "Donations History",
					},
				},
			],
		},
		{
			path: "/register-success",
			component: () => import("../pages/donor/RegisterSuccess.vue"),
			name: "donor-register-success",
			meta: {
				title: "Donor Login",
			},
		},
		{
			path: "/donor/login",
			component: () => import("../pages/guest/DonorLogin.vue"),
			name: "donor-login",
			meta: {
				title: "Donor Login",
			},
			beforeEnter: donorGuard,
		},
		{
			path: "/donor/register",
			component: () => import("../pages/guest/DonorRegister.vue"),
			meta: {
				title: "Donor Register",
			},
			name: "donor-register",
		},
		{
			path: "/patient",
			component: () => import("../pages/patient/Index.vue"),
			beforeEnter: patientGuard,
			name: "patient-home",
		},
		{
			path: "/patient/login",
			component: () => import("../pages/guest/PatientLogin.vue"),
			meta: {
				title: "Patient Login",
			},
			name: "patient-login",
		},
		{
			path: "/patient/register",
			component: () => import("../pages/guest/PatientRegister.vue"),
			meta: {
				title: "Patient Login",
			},
			name: "patient-register",
		},
	],
});

router.beforeEach((to, from, next) => {
	const title = to.meta.title;
	if (title) {
		document.title = title as string;
	}
	next();
});

export default router;
