import { defineStore } from "pinia";

import { ref } from "vue";

class Notifications {
	public notifications = ref([]);

	public notification = ({
		title = "",
		content = "this is a notification",
		timeout = 2000,
	}) => {
		this.notifications.value.push({ content });
		console.log(this.notifications.value);
		setTimeout(() => this.notifications.value.pop(), timeout);
	};
}

export default defineStore("notifications", () => {
	return new Notifications();
});
