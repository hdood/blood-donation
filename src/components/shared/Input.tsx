import { Transition } from "vue";
const Input: any = {
	data() {
		return {
			initial: false,
		};
	},
	render() {
		const modelValue = this.$attrs.modelValue;

		const name = this.$attrs.name;
		const emit = this.$emit;
		const type = this.$attrs.type;
		const error = this.$attrs.error;
		let as = this.$attrs?.as;

		if (!as) as = "input";

		return (
			<div class="flex flex-col space-y-1 ">
				<label
					class="opacity-70 text-lg dark:text-white dark:opacity-100"
					for={name}
				>
					{name}
				</label>

				{as === "input" ? (
					<input
						class="rounded-lg px-4 font-medium py-2 border  focus:outline-none bg-gray-50 dark:bg-slate-700 dark:text-white"
						value={modelValue}
						onInput={(event: any) => {
							emit("update:modelValue", event.target?.value);
						}}
						type={type}
						id={name}
						name={name}
					/>
				) : (
					<textarea
						class="rounded-lg px-4 font-medium py-2 border  focus:outline-none bg-gray-50 dark:bg-slate-700 dark:text-white"
						value={modelValue}
						onInput={(event: any) => {
							emit("update:modelValue", event.target?.value);
						}}
						id={name}
						name={name}
					/>
				)}

				{error && (
					<span
						key={name}
						class="text-sm text-red-600 dark:text-red-200 italic"
					>
						{error}
					</span>
				)}
			</div>
		);
	},
};

export default Input;
