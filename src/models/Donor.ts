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
		dob?: string,
		email?: string,
		password?: string,
		address?: string,
		gender?: string,
		phone?: string,
		bloodType?: string,
		rhFactor?: boolean,
		donations?: any
	) {
		super(id, name, dob, email, password, address, gender, phone);
		this.bloodType.value = bloodType;
		this.rhFactor.value = rhFactor;
		this.donations = donations;
	}

	public bloodTypeString = computed(() => {
		const rh = this.rhFactor.value ? " Positive" : " Negative";
		return this.bloodType?.value?.toUpperCase?.() + " " + rh;
	});

	async save() {
		const data = new FormData();

		data.append("name", this.name.value);
		data.append("email", this.email.value);
		data.append("address", this.address.value);
		data.append("phone", this.phone.value);
		data.append("bloodType", this.bloodType.value);

		console.log(
			"wrapped : ",
			this.rhFactor,
			"unwrapped :",
			this.rhFactor.value
		);

		data.append("rhFactor", this.rhFactor.value.toString());

		data.append("dob", this.dob.value);

		// TODO : update the hard coded values of password and gender

		data.append("gender", "male");
		data.append("password", this.password.value);

		const response = await axios.post(
			import.meta.env.VITE_API_URL + "/admin/donor",
			data
		);

		return response;
	}

	// * Fetch All Donors

	static async all(url: string) {
		const { data } = await axios.get(url);
		const donors: any = [];

		const { data: fetchedDonors } = data;

		fetchedDonors.forEach((donor: any) => {
			if (donor) {
				donors.push(
					new Donor(
						donor.id,
						donor.name,
						donor.dob,
						donor.email,
						donor.address,
						undefined,
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
			import.meta.env.VITE_API_URL + `/admin/donor/${id}`,
			data
		);

		return response;
	}
	async delete() {
		const wrapped = this.id?.value;

		const id = wrapped ? this.id.value : this.id;

		const response = await axios.delete(
			import.meta.env.VITE_API_URL + `/admin/donor/${id}`
		);

		return response;
	}

	toObject() {
		const wrapped = this.name?.value;

		if (!wrapped)
			return {
				name: this.name,
				phone: this.phone,
				email: this.email,
				address: this.address,
				bloodType: this.bloodType,
				rhFactor: this.rhFactor,
				dob: this.dob,
			};

		return {
			name: this.name.value,
			phone: this.phone.value,
			email: this.email.value,
			address: this.address.value,
			bloodType: this.bloodType.value,
			rhFactor: this.rhFactor.value,
			dob: this.dob,
		};
	}
}
