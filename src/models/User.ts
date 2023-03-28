export default class User {
	public name: string;
	public email: string;
	public address: string;
	public gender: string;
	public phone: string;

	constructor(
		name: string,
		email: string,
		address: string,
		gender: string,
		phone: string
	) {
		this.name = name;
		this.email = email;
		this.gender = gender;
		this.address = address;
		this.phone = phone;
	}
}
