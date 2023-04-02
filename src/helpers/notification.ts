import useNotificationsStore from "@/stores/notifcations";

export default (title = "", content = "", options: object = {}) => {
	const { notification } = useNotificationsStore();

	notification({ title, content, ...options });
};
