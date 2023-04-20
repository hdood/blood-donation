import { computed, ref, type Ref } from "vue";

export default class User {
	public id: Ref<string | undefined> = ref("");
	public name: Ref<string | undefined> = ref("");
	public email: Ref<string | undefined> = ref("");
	public dob: Ref<any> = ref({});
	public address: Ref<string | undefined> = ref("");
	public gender: Ref<string | undefined> = ref("");
	public password: Ref<string | undefined> = ref("");
	public phone: Ref<string | undefined> = ref("");

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
		this.id.value = id;
		this.name.value = name;
		this.dob.value = dob;
		this.email.value = email;
		this.gender.value = gender;
		this.address.value = address;
		this.phone.value = phone;
		this.password.value = password;
	}

	public age = computed(() => {
		const currentYear = new Date().getFullYear();
		const dob = new Date(this.dob.value);
		return currentYear - dob.getFullYear();
	});
}
