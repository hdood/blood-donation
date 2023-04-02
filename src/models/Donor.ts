import axios from "axios";
import { computed, ref, type Ref } from "vue";
import User from "./User";

export default class Donor extends User {
	public rhFactor: Ref<boolean> = ref(false);
	public bloodType: Ref<string> = ref("");

	constructor(
		id: string = "",
		name: string = "",
		email: string = "",
		address: string = "",
		gender: string = "",
		phone: string = "",
		bloodType: string = "",
		rhFactor: boolean = false
	) {
		super(id, name, email, address, gender, phone);
		this.bloodType.value = bloodType;
		this.rhFactor.value = rhFactor;
	}

	public bloodTypeString = computed(() => {
		const rh = this.rhFactor.value ? " -" : " +";
		return this.bloodType.value.toUpperCase() + " " + rh;
	});

	async save() {
		const data = new FormData();
		for (let prop in this) {
			data.append(prop, this[prop]);
		}
		const route = this.constructor.name.toLowerCase() + "s";

		const response = await axios.post(
			import.meta.env.VITE_ADMIN_API_BASE_URL + "/" + route,
			data
		);

		console.log(response);
	}

	static async all(): Promise<Donor[]> {
		const { data } = await axios.get(
			"http://localhost:8000/api/admin/donors"
		);
		const donors: Donor[] = [];
		data.forEach((donor?: Donor) => {
			if (donor) {
				donors.push(
					new Donor(
						donor.id,
						donor.name,
						donor.email,
						donor.address,
						donor.gender,
						donor.phone,
						donor.bloodType,
						donor.rhFactor
					)
				);
			}
		});
		return donors;
	}

	async update() {
		const data = new FormData();
		data.append("name", this.name.value);
		data.append("email", this.email.value);
		data.append("address", this.address.value);
		data.append("phone", this.phone.value);
		data.append("bloodType", this.bloodType.value);
		data.append("rhFactor", this.rhFactor.value.toString());

		console.log(this.id);
		const response = await axios.post(
			import.meta.env.VITE_ADMIN_API_BASE_URL +
				`/donors/${this.id.value}`,
			data
		);

		return response;
	}
}
