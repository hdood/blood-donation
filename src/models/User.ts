import { computed } from "vue";

export default class User {
	public id?: string = "";
	public name?: string = "";
	public email?: string = "";
	public dob?: string = "";
	public address?: string = "";
	public gender?: string = "";
	public password?: string = "";
	public phone?: string = "";
	public cpassword?: string = "";

	constructor(
		id?: string,
		name?: string,
		dob?: string,
		email?: string,
		password?: string,
		address?: string,
		gender?: string,
		phone?: string
	) {
		this.id = id;
		this.name = name;
		this.dob = dob;
		this.email = email;
		this.gender = gender;
		this.address = address;
		this.phone = phone;
		this.password = password;
	}

	public age = computed(() => {
		const currentYear = new Date().getFullYear();
		const dob = new Date(this.dob as string);
		return currentYear - dob.getFullYear();
	});
}
