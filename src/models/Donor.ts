import axios from "axios";
import { computed, ref, type Ref } from "vue";
import User from "./User";

export default class Donor extends User {
	public rhFactor?: string = "";
	public bloodGroup?: string = "";
	public active?: boolean;

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
		active?: boolean,
		donations?: any
	) {
		super(id, name, dob, email, password, address, gender, phone);
		this.bloodGroup = bloodGroup;
		this.rhFactor = rhFactor;
		this.donations = donations;
		this.active = active;
	}

	public bloodGroupString = computed(() => {
		return this.bloodGroup?.toUpperCase?.() + " " + this.rhFactor;
	});
	public static parseBloodGroup = (bloodGroup: string, rhFactor: string) =>
		bloodGroup?.toUpperCase?.() + " " + rhFactor;

	public static parseAge = (dob: string) => {
		const currentYear = new Date().getFullYear();
		const _dob = new Date(dob);
		return currentYear - _dob.getFullYear();
	};

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
			import.meta.env.VITE_API_URL + `/admin/donor?page=${page}`
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
						donor.active,
						donor.donations
					)
				);
			}
		});
		return { donors, data };
	}

	static async fetchInactiveDonors(page: number, query: string) {
		const { data } = await axios.get(
			import.meta.env.VITE_API_URL + `/admin/requests`,
			{ params: { page, query } }
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
						donor.active,
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

	async toggleActiveState(id?: string) {
		console.log("toggle : ", this);
		const url = id
			? import.meta.env.VITE_API_URL + `/admin/donor/toggleActive/${id}`
			: import.meta.env.VITE_API_URL +
			  `/admin/donor/toggleActive/${this.id}`;
		const response = await axios.post(url);

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
