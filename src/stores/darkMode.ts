import { defineStore } from "pinia";
import { ref } from "vue";
const darkModeStore: any = defineStore("darkMode", () => {
	const darkMode = ref(false);
	const setDarkMode = (value: boolean) => {
		darkMode.value = value;
	};
	return { darkMode, setDarkMode };
});

export default darkModeStore;
