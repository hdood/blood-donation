export default (email: string) => {
	const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	return regex.test(email);
};
