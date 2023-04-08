import axios from "axios";
import User from "./User";

export default class Patient extends User {
	/**
	 * * Fetch All Patients
	 */
	static async all(link: string) {
		const response = await axios.get(link);

		return { patients: response.data.data, data: response.data };
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
			import.meta.env.VITE_ADMIN_API_BASE_URL + "/patient",
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
			import.meta.env.VITE_ADMIN_API_BASE_URL + `/patient/${id}`,
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
			import.meta.env.VITE_ADMIN_API_BASE_URL + `/patient/${id}`
		);

		return response;
	}
}
