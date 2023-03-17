import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from "../pages/admin/Dashboard.vue"
import Home from "../pages/guest/Index.vue"
import adminGuard from './guards/adminGuard'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path :"/",
      component : Home,
      name : "home"
    },
    {
      path: '/admin',
      component: () => import('../pages/admin/Index.vue'), 
      beforeEnter : adminGuard,  
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
          component : () => import("../pages/admin/Patients.vue"),
          name : "admin-patients"
        }
      ],
    }
  ]
})

export default router
