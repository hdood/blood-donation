import { defineStore } from "pinia";
import  { ref } from "vue"
import type { Ref } from "vue";
import axios from "axios";


interface Credentials
{
    password : string,
    email : string, 
}
class AuthStore {


    public showLoginModal :  Ref<boolean> = ref(false)
    public credentials : Ref<Credentials> =ref({
        email : "",
        password : "",
    }) 

    public errors  = ref({
        invalidEmail : false, 
        invalidCredentials : false,
        invalidPassword : false
    })


    public toggleLoginModal = () => {
        this.showLoginModal.value =  !this.showLoginModal.value 
    }



    public  login = async () => {
        const data = new FormData()

        data.append("email", this.credentials.value.email)
        data.append("password", this.credentials.value.password)

        const response = await axios.post("http://localhost:8000/api/donor/login")


        if(!response) {
            this.errors.value.invalidCredentials = true 
            return
        }
        
    }
}

export default defineStore("auth", () => {
    return new AuthStore()
})




