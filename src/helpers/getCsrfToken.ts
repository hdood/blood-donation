import axios from "axios";

export default async () => {
	axios.get("http://localhost:8000/sanctum/csrf-cookie");
};
