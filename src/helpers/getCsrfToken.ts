import axios from "axios";

export default async () => {
	console.log("getting csrf token	");
	axios.get("http://localhost:8000/sanctum/csrf-cookie");
};
