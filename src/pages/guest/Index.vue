<template>
	<Layout>
		<div class="flex justify-center">
			<MultiStepForm class="bg-white p-3 rounded-lg" height="15">
				<step class="flex flex-col" :validate="step1">
					<div>
						<label for="name">Name</label>
						<input type="name" id="name" v-model="name" />
					</div>
				</step>
				<step :validate="step2">
					<label for="address">address</label>
					<input type="text" id="address" v-model="address" />
				</step>
				<step :validate="step1">step 4</step>
			</MultiStepForm>
		</div>
	</Layout>
</template>

<script setup lang="ts">
	import Layout from "@/components/guest/Layout.vue";
	import MultiStepForm from "@/components/shared/MultiStepForm";

	import Step from "@/components/shared/Step.vue";
	import { ref } from "vue";

	const name = ref("");
	const address = ref("");

	function step1() {
		return true;
	}

	function step2() {
		return true;
	}
</script>

<style></style>
