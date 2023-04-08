import { ref, type Ref } from "vue";

export default class User {
	public id: Ref<string | undefined> = ref("");
	public name: Ref<string | undefined> = ref("");
	public email: Ref<string | undefined> = ref("");
	public address: Ref<string | undefined> = ref("");
	public gender: Ref<string | undefined> = ref("");
	public phone: Ref<string | undefined> = ref("");

	constructor(
		id?: string,
		name?: string,
		email?: string,
		address?: string,
		gender?: string,
		phone?: string
	) {
		this.id.value = id;
		this.name.value = name;
		this.email.value = email;
		this.gender.value = gender;
		this.address.value = address;
		this.phone.value = phone;
	}
}
