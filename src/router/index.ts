import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from "../pages/admin/Dashboard.vue"
import Donors from "../pages/admin/Donors.vue"
import Patients from "../pages/admin/Patients.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      component: () => import('../pages/admin/Index.vue'), 
      children : [
        {
          path : "",
          component : AdminDashboard,
          name : "admin-dashboard"
        }, 
        {
          path : "donors",
          component : () => import("../pages/admin/Donors.vue"),
          name : "admin-donors"
        },
        {
          path : "patients",
          component : Patients,
          name : "admin-patients"
        }
      ],
    }
  ]
})

export default router
