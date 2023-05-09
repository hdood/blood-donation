import axios from "axios";
import User from "./User";
import patients from "@/stores/admin/patients";

export default class Patient extends User {
	/**
	 * * Fetch All Patients
	 */
	public active?: boolean;

	constructor(
		id?: string,
		name?: string,
		dob?: string,
		email?: string,
		password?: string,
		address?: string,
		gender?: string,
		phone?: string,
		active?: boolean
	) {
		super(id, name, dob, email, password, address, gender, phone);
		this.active = active;
	}
	static async all(page: number) {
		const response = await axios.get(
			import.meta.env.VITE_API_URL + `/admin/patient?page=${page}`
		);
		const patients: Patient[] = [];

		response.data.data.forEach((patient: any) => {
			patients.push(
				new Patient(
					patient.id,
					patient.name,
					patient.dob,
					patient.email,
					patient.password,
					patient.address,
					patient.gender,
					patient.phone,
					patient.active
				)
			);
		});

		return { patients, data: response.data };
	}

	/**
	 * * Save Patient
	 */
	async save() {
		const data = new FormData();

		data.append("name", this.name as string);
		data.append("email", this.email as string);
		data.append("address", this.address as string);
		data.append("phone", this.phone as string);
		data.append("gender", this.gender as string);
		data.append("password", this.password as string);
		data.append("dob", this.dob as string);

		const response = await axios.post(
			import.meta.env.VITE_API_URL + "/admin/patient",
			data
		);

		return response;
	}

	/**
	 * * Update Patient
	 */

	async update() {
		const data = new FormData();

		data.append("name", this.name as string);
		data.append("address", this.address as string);
		data.append("phone", this.phone as string);
		data.append("gender", this.gender as string);
		data.append("dob", this.dob as string);

		const response = await axios.put(
			import.meta.env.VITE_API_URL + `/admin/patient/${this.id}`,
			{
				name: this.name,
				address: this.address,
				phone: this.phone,
				gender: this.gender,
				dob: this.dob,
			}
		);

		return response;
	}

	/**
	 * * Delete Patient
	 */

	async delete() {
		const response = await axios.delete(
			import.meta.env.VITE_API_URL + `/admin/patient/${this.id}`
		);

		return response;
	}

	async toggleActiveState() {
		const response = await axios.post(
			import.meta.env.VITE_API_URL +
				`/admin/patient/toggleActive/${this.id}`
		);

		return response;
	}
	static async searchByName(name: string) {
		const response = await axios.get(
			import.meta.env.VITE_API_URL + `/admin/patient?query=${name}`
		);
		const patients: Patient[] = [];

		response.data.data.forEach((patient: any) => {
			patients.push(
				new Patient(
					patient.id,
					patient.name,
					patient.dob,
					patient.email,
					patient.address,
					patient.gender,
					patient.phone
				)
			);
		});

		return { patients, data: response.data };
	}
}
