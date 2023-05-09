<template>
	<div class="p-20 w-11/12 mx-auto flex flex-col gap-5">
		<div class="text-2xl dark:text-white">
			Welcome <span class="font-medium">{{ formattedName }} </span> today
			is {{ formattedDate(new Date()) }}
		</div>
		<div>
			<div class="w-full h-full flex gap-48">
				<div
					v-if="state == ''"
					class="bg-gradient-to-l from-indigo-400 to-indigo-500 p-4 rounded-lg gap-4 w-screen flex justify-between items-center"
				>
					<div class="text-white space-y-1">
						<div class="text-2xl">
							Book an appointment and save lives!
						</div>
						<div>
							After taking the survey the admin will consult it
							and decide if your eligible to donate.
						</div>
					</div>
					<Button
						type="card-info"
						class="h-10 px-2"
						@click="toggleSurveyModal"
						>Take the survey</Button
					>
				</div>
				<div
					v-if="state == AppointmentState.Pending"
					class="bg-gradient-to-l from-blue-400 to-blue-500 p-4 rounded-lg space-y-4 w-full flex justify-between items-center"
				>
					<div class="flex flex-col gap-3">
						<div
							class="text-2xl font-medium text-white flex items-center gap-2"
						>
							<ClockIcon class="w-8 h-8" />
							Your Appointment Is Pending
						</div>
						<div class="font-medium text-white">
							Your appointment is pending you'll receive a
							notification when it's scheduled.
						</div>
					</div>
					<Button
						class="w-40 h-10"
						type="card-danger"
						@click="toggleCancelModal"
						>Cancel Appointment</Button
					>
				</div>
				<div
					v-if="state == AppointmentState.Accepted"
					class="bg-gradient-to-l from-teal-400 to-teal-500 p-4 rounded-lg space-y-4 w-screen flex justify-between items-center"
				>
					<div class="flex flex-col gap-3">
						<div
							class="text-3xl font-medium text-white flex items-center gap-2"
						>
							<BellAlertIcon class="w-8 h-8" />
							Reminder
						</div>
						<div class="text-lg font-medium text-white">
							You Have an appointment in
							{{ formattedDate(lastAppointment.date) }}
							at
							{{ lastAppointment.time }}
						</div>
					</div>
					<Button
						class="w-40 h-10"
						type="card-danger"
						@click="toggleCancelModal"
						>Cancel Appointment</Button
					>
				</div>

				<div
					v-if="state == AppointmentState.Rescheduled"
					class="bg-gradient-to-l from-orange-400 flex justify-between to-orange-500 p-4 rounded-lg w-screen items-center"
				>
					<div class="flex flex-col gap-3">
						<div
							class="text-2xl font-medium text-white flex items-center gap-4"
						>
							<ExclamationCircleIcon class="w-8 h-8" />
							Appointment Rescheduled!
						</div>
						<div class="text-lg text-white">
							your appointment is rescheduled to
							{{ formattedDate(lastAppointment.date) }}
							at
							{{ lastAppointment.time }}
						</div>
					</div>
					<Button
						class="w-40 h-10"
						type="card-danger"
						@click="toggleCancelModal"
						>Cancel Appointment</Button
					>
				</div>
			</div>
			<div class="my-7"><BloodRequestsTable /></div>
			<BookAppointmentSurvey
				@close="toggleSurveyModal"
				:show="surveyModal"
			/>
			<ConfirmModal
				title="Cancel Appointment"
				body="Are you sure you want
			to cancel the appointment?"
				positive="Cancel The Appointment"
				:show="cancelModal"
				negative="back"
				@close="toggleCancelModal"
				@confirm="cancelAppointment"
			/>
			<BookAppointmentModal
				:show="bookModal"
				@close="toggleBookModal"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import useAuthStore from "@/stores/donor/auth";
	import useAppointmentsStore from "@/stores/donor/appointments";
	import Button from "@/components/shared/Button.vue";
	import BookAppointmentSurvey from "@/components/donor/BookAppointmentSurvey.vue";
	import { ref, onMounted, computed } from "vue";
	import { storeToRefs } from "pinia";
	import { BellAlertIcon } from "@heroicons/vue/20/solid";
	import { ClockIcon } from "@heroicons/vue/20/solid";
	import { ExclamationCircleIcon } from "@heroicons/vue/20/solid";
	import ConfirmModal from "@/components/shared/ConfirmModal.vue";
	import BookAppointmentModal from "@/components/donor/BookAppointmentModal.vue";
	import BloodRequestsTable from "@/components/donor/BloodRequestsTable.vue";

	const surveyModal = ref(false);
	const cancelModal = ref(false);

	const toggleSurveyModal = () => (surveyModal.value = !surveyModal.value);
	const toggleCancelModal = () => (cancelModal.value = !cancelModal.value);

	const { currentUser } = storeToRefs(useAuthStore());
	const { cancelAppointment, fetchAppointmentState, toggleBookModal } =
		useAppointmentsStore();
	const { state, lastAppointment, bookModal } = storeToRefs(
		useAppointmentsStore()
	);

	enum AppointmentState {
		Pending = "pending",
		Accepted = "accepted",
		Cancelled = "cancelled",
		Rescheduled = "rescheduled",
	}

	function getDayName(dateStr: any, locale: any) {
		let date = new Date(dateStr);
		return date.toLocaleDateString(locale, { weekday: "long" });
	}
	function getMonthName(dateStr: any) {
		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		const d = new Date(dateStr);
		return monthNames[d.getMonth()];
	}

	const formattedDate = (date: string | Date) => {
		return (
			getDayName(date, "us-US") +
			" " +
			new Date(date).getDate() +
			" " +
			getMonthName(date) +
			" " +
			new Date(date).getFullYear()
		);
	};
	const formattedName = computed(() => {
		const user = currentUser.value as { name: string };
		const chunks = user.name.split(" ");

		return chunks[0] + "." + chunks?.[1]?.[0];
	});

	onMounted(async () => {
		await fetchAppointmentState();
	});
</script>

<style scoped></style>
