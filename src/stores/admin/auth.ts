import { defineStore } from "pinia";
import { ref } from "vue";


class AdminAuthStore  {

    public currentUser = ref({})
    public authenticated = ref(false)

}


export default defineStore("admin-auth", () => new AdminAuthStore())