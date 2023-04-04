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
		const validation = this.$attrs.validation;
		let errorMsg = this.$attrs.errorMsg;
		let required = this.$attrs.required;

		if (!required) required = true;

		if (modelValue != "" && this.initial != true) this.initial = true;

		function validate() {
			if (!validation && typeof validation != "function") return;
			if (!validation()) {
				if (required && modelValue == "") {
					errorMsg = "this field is required";
				}
				return (
					<span
						key={name}
						class="text-sm text-red-600 dark:text-rose-100	 italic"
					>
						{errorMsg}
					</span>
				);
			}
		}

		return (
			<div class="flex flex-col space-y-1 h-20 ">
				<label
					class="opacity-70 text-lg dark:text-white"
					for={name}
				>
					{" "}
					{name}{" "}
				</label>
				<input
					class={[
						"rounded-lg px-4 font-medium py-2 border focus:outline-none",
						this.initial && !validation() && "border-rose-700",
						this.initial && validation() && "border-green-500",
					]}
					value={modelValue}
					onInput={(event: any) => {
						emit("update:modelValue", event.target?.value);
					}}
					type={type}
					id={name}
					name={name}
				/>
				<Transition
					enterActiveClass="transition-all"
					leaveActiveClass="transition-all"
					leaveToClass="opacity-0"
					enterFromClass="opacity-0"
				>
					{{ default: this.initial ? () => validate() : null }}
				</Transition>
			</div>
		);
	},
};

export default Input;
