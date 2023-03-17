import	{ defineStore } from "pinia" 
import { ref, reactive, type Ref } from "vue"
import Donor from "@/models/Donor"



class DonorsStore {
	public donors : Ref  = ref<Promise<Donor[]>>();	
	public registerData = reactive({
		name : "",
		bloodType : "",
		image : ""
	})

	 fetchDonors =  () => {
		this.donors.value = Donor.all()
	}
}
export default defineStore("donors", () => {
		return new DonorsStore()
})
