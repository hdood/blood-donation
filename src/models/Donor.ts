import axios from "axios";
import { computed, ref, type Ref } from "vue";
import User from "./User";

export default class Donor extends User {
	public rhFactor?: string = "";
	public bloodGroup?: string = "";
	public cpassword?: any;
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
		bloodGroup?: string,
		rhFactor?: string,
		donations?: any,
		cpassword?: any
	) {
		super(id, name, dob, email, password, address, gender, phone);
		this.bloodGroup = bloodGroup;
		this.rhFactor = rhFactor;
		this.donations = donations;
		this.cpassword = cpassword;
	}

	public bloodGroupString = computed(() => {
		return this.bloodGroup?.toUpperCase?.() + " " + this.rhFactor;
	});

	async save() {
		const data = new FormData();

		data.append("name", this.name as string);
		data.append("email", this.email as string);
		data.append("address", this.address as string);
		data.append("phone", this.phone as string);
		data.append("bloodGroup", this.bloodGroup as string);
		data.append("gender", this.gender as string);
		data.append("dob", this.dob as string);
		data.append("password", this.password as string);
		data.append("rhFactor", this.rhFactor as string);

		const response = await axios.post(
			import.meta.env.VITE_API_URL + "/admin/donor",
			data
		);

		return response;
	}

	// * Fetch All Donors

	static async all(page: number) {
		const { data } = await axios.get(
			import.meta.env.VITE_API_URL + `/admin/donor?pa	ge=${page}`
		);
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
						undefined,
						donor.address,
						donor.gender,
						donor.phone,
						donor.bloodGroup,
						donor.rhFactor,
						donor.donations
					)
				);
			}
		});
		return { donors, data };
	}

	async update() {
		const response = await axios.put(
			import.meta.env.VITE_API_URL + `/admin/donor/${this.id}`,
			{
				name: this.name,
				address: this.address,
				phone: this.phone,
				bloodGroup: this.bloodGroup,
				rhFactor: this.rhFactor,
				gender: this.gender,
				dob: this.dob,
			}
		);

		return response;
	}
	async delete() {
		const response = await axios.delete(
			import.meta.env.VITE_API_URL + `/admin/donor/${this.id}`
		);

		return response;
	}

	static async searchByName(name: string) {
		const { data } = await axios.get(
			import.meta.env.VITE_API_URL + `/admin/donor?query=${name}`
		);

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
						undefined,
						donor.address,
						donor.gender,
						donor.phone,
						donor.bloodGroup,
						donor.rhFactor,
						donor.donations
					)
				);
			}
		});
		return { donors, data };
	}
}
