class AppointmentsController < ApplicationController

	def index
		@appointments = Appointment.order("appt_time ASC")
		@appointment = Appointment.new
	end

	def create
		@appointments = Appointment.order("appt_time ASC")
		@appointment = Appointment.create(appointment_params)

		# if @appointment.save
		# 	render json: @appointment
		# else
		# 	render json: @appointment.errors.full_messages, status: "Unable to process"
		# end

	end

	private

	def appointment_params
		params.require(:appointment).permit(:title, :appt_time)
	end

end