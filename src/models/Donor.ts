import axios from "axios";
import { computed, ref, type Ref } from "vue";
import User from "./User";

export default class Donor extends User {
	public rhFactor: Ref<boolean> = ref(false);
	public bloodType: Ref<string> = ref("");
	public donations = [];

	constructor(
		id?: string,
		name?: string,
		email?: string,
		address?: string,
		gender?: string,
		phone?: string,
		bloodType?: string,
		rhFactor?: boolean,
		donations?: any
	) {
		super(id, name, email, address, gender, phone);
		this.bloodType.value = bloodType;
		this.rhFactor.value = rhFactor;
		this.donations = donations;
	}

	public bloodTypeString = computed(() => {
		const rh = this.rhFactor.value ? " Negative" : " Positive";
		return this.bloodType?.value?.toUpperCase() + " " + rh;
	});

	async save() {
		const data = new FormData();

		data.append("name", this.name.value);
		data.append("email", this.email.value);
		data.append("address", this.address.value);
		data.append("phone", this.phone.value);
		data.append("bloodType", this.bloodType.value);

		data.append("rhFactor", this.rhFactor.value.toString());

		// TODO : update the hard coded values of password and gender

		data.append("gender", "male");
		data.append("password", "password");

		const response = await axios.post(
			import.meta.env.VITE_ADMIN_API_BASE_URL + "/donor",
			data
		);

		return response;
	}

	// * Fetch All Donors

	static async all(url: string) {
		const { data } = await axios.get(url);
		const donors: any = [];

		const { data: fetchedDonors } = data;

		fetchedDonors.forEach((donor?: any) => {
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
						donor.rhFactor,
						donor.donations
					)
				);
			}
		});
		return { donors, data };
	}

	async update() {
		const data = new FormData();
		data.append("name", this.name.value);
		data.append("email", this.email.value);
		data.append("address", this.address.value);
		data.append("phone", this.phone.value);
		data.append("bloodType", this.bloodType.value);
		data.append("rhFactor", this.rhFactor.value.toString());

		const wrapped = this.id?.value;

		const id = wrapped ? this.id.value : this.id;

		const response = await axios.put(
			import.meta.env.VITE_ADMIN_API_BASE_URL + `/donor/${id}`,
			data
		);

		return response;
	}
	async delete() {
		const wrapped = this.id?.value;

		const id = wrapped ? this.id.value : this.id;

		const response = await axios.delete(
			import.meta.env.VITE_ADMIN_API_BASE_URL + `/donor/${id}`
		);

		return response;
	}
}
