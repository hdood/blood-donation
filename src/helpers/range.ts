export default (start: number, end: number, step: number = 1) => {
	const numbers: Array<number> = [];

	for (let i = start; i <= end; i += step) {
		numbers.push(i);
	}

	return numbers;
};
