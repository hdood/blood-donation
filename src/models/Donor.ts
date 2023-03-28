import donors from "@/stores/donor/donors";
import axios from "axios";
import User from "./User";

export default class Donor extends User {
	static async all(): Promise<Donor[]> {
		const { data } = await axios.get(
			"http://localhost:8000/api/admin/donors"
		);
		const donors: Donor[] = [];
		data.forEach((donor?: Donor) => {
			if (donor) {
				donors.push(
					new Donor(
						donor.name,
						donor.email,
						donor.address,
						donor.gender,
						donor.phone
					)
				);
			}
		});

		return donors;
	}

	public save() {
		const data = new FormData();

		data.append("email", this.email);
	}
}
