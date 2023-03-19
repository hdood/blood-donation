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
      children : [
        {
          path : "",
          component : AdminDashboard,
          name : "admin-dashboard",
          beforeEnter : adminGuard,  

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
    },
    {
      path : "/admin/login",
      component : () => import("../pages/admin/Login.vue"),
      name : "admin-login"
    }, 
    {
      path : '/donor',
      component : () => import("../pages/donor/Index.vue")
    }
  ]
})

export default router
