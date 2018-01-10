class Appointments extends React.Component {
	constructor(props)  {
	    super(props);
		this.state = {
			appointments: this.props.appointments,
			input_title: 'Kick ASS!',
			input_appt_time: 'Tomorrow at 9am'
	  	}

	  	this.handleUserInput = this.handleUserInput.bind(this)
	}

	handleUserInput(obj) {
	  	this.setState({
			input_title: obj[name],
			input_appt_time: obj[name]
	  	});
	}

	render () {
		return (
			<div>
				<AppointmentForm
					input_title={this.state.input_title}
					input_appt_time={this.state.input_appt_time}
					onUserInput={this.handleUserInput} />
				
				<AppointmentsList appointments={this.state.appointments} />
			</div>
		);
	}
}