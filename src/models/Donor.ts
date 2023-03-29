import axios from "axios";
import User from "./User";

export default class Donor extends User {
	public rhFactor: string;
	public bloodType: string;

	constructor(
		id: string,
		name: string,
		email: string,
		address: string,
		gender: string,
		phone: string,
		bloodType: string,
		rhFactor: string
	) {
		super(id, name, email, address, gender, phone);
		this.bloodType = bloodType;
		this.rhFactor = rhFactor;
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

	public save() {
		const data = new FormData();

		data.append("email", this.email);
	}
}
