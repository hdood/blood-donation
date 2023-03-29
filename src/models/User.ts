export default class User {
	public id: string;
	public name: string;
	public email: string;
	public address: string;
	public gender: string;
	public phone: string;

	constructor(
		id: string,
		name: string,
		email: string,
		address: string,
		gender: string,
		phone: string
	) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.gender = gender;
		this.address = address;
		this.phone = phone;
	}
}
