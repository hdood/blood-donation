import donors from "@/stores/donor/donors";
import axios from "axios";
import User from "./User";


export default class Donor extends User {


    static  async all(): Promise<Donor[]> {
        const { data } = await axios.get("http://localhost:8000/api/donors")
        const donors : Donor[] = [] 
        data.forEach((donor? : Donor)   => {
            if(donor){
                donors.push(new Donor(donor.firstName, donor.lastName ,donor.email, donor?.password))
            }
        });

        return donors
    }       

    public save() {
    const data = new FormData()

    data.append('name', this.firstName)
    data.append('name', this.lastName)
    data.append('email', this.email)
    data.append('password', this.password)
    }
}