import { ref, type Ref } from "vue";

export default class User {
	public id: Ref<string> = ref("");
	public name: Ref<string> = ref("");
	public email: Ref<string> = ref("");
	public address: Ref<string> = ref("");
	public gender: Ref<string> = ref("");
	public phone: Ref<string> = ref("");

	constructor(
		id: string,
		name: string,
		email: string,
		address: string,
		gender: string,
		phone: string
	) {
		this.id.value = id;
		this.name.value = name;
		this.email.value = email;
		this.gender.value = gender;
		this.address.value = address;
		this.phone.value = phone;
	}
}
