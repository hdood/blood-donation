import { defineStore } from "pinia";

import { ref } from "vue";

class Notifications {
	public notifications: any = ref([]);

	public notification = (notification: any, duration: any) => {
		this.notifications.value.push(notification);
		setTimeout(() => this.notifications.value.pop(), duration);
	};
}

export default defineStore("notifications", () => {
	return new Notifications();
});
