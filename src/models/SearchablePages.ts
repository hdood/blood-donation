import DonorIcon from "@/icons/DonorIcon.vue";
import PatientIcon from "@/icons/PatientIcon.vue";
import DashBoardIcon from "@/icons/DashBoardIcon.vue";
import type Searchable from "@/contracts/Searchable";


const pages: Array<Searchable> = [
    {
        name: "donors",
        isComponent: true,
        component: DonorIcon,
        link : "/admin/donors"
    },
    {
        name: "patients",
        isComponent: true,
        component: PatientIcon,
        link : "/admin/patients"
    },
    {
        name : "dashboard",
        isComponent : true,
        component : DashBoardIcon,
        link : "/admin"
    },
    {
        name : "dashboard",
        isComponent : false,
        image : "/doctor.jpeg",
        link : "/admin"
    },
    
];

export default pages

