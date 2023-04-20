import axios from "axios";
import User from "./User";
import patients from "@/stores/admin/patients";

export default class Patient extends User {
	/**
	 * * Fetch All Patients
	 */
	static async all(link: string) {
		const response = await axios.get(link);
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

	/**
	 * * Save Patient
	 */
	async save() {
		const data = new FormData();

		data.append("name", this.name.value);
		data.append("email", this.email.value);
		data.append("address", this.address.value);
		data.append("phone", this.phone.value);
		data.append("gender", this.gender.value);

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

		data.append("name", this.name.value);
		data.append("email", this.email.value);
		data.append("address", this.address.value);
		data.append("phone", this.phone.value);
		data.append("gender", this.gender.value);

		const wrapped = this.id?.value;

		const id = wrapped ? this.id.value : this.id;

		const response = await axios.put(
			import.meta.env.VITE_API_URL + `/admin/patient/${id}`,
			data
		);

		return response;
	}

	/**
	 * * Delete Patient
	 */

	async delete() {
		const wrapped = this.id?.value;

		const id = wrapped ? this.id.value : this.id;

		const response = await axios.delete(
			import.meta.env.VITE_API_URL + `/admin/patient/${id}`
		);

		return response;
	}
}
