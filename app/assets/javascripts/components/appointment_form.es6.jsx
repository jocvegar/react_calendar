class AppointmentForm extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this)
		// this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		let name = event.target.name;
		let obj = {};
		obj[name] = event.target.value;
		this.props.onUserInput(obj);
		console.log(obj);
	}

	// handleSubmit(event) {
	// 	// event.preventDefault();
	// 	// console.log("STUCK!!");
	// }

  	render () {
	    return (
	    	<div>
		    	<h3>Make A New Appointment</h3>
    	    	<form 
    	    		noValidate="novalidate" 
    	    		className="simple_form new_appointment" 
    	    		id="new_appointment" 
    	    		action="/appointments" 
    	    		acceptCharset="UTF-8" 
    	    		data-remote="true" 
    	    		method="post">

    	    		<input name="utf8" type="hidden" value="✓" />

    	    		<div className="form-group string optional appointment_title">
    	    			<label className="control-label string optional">Title</label>
    	    			<input 
    	    				className="form-control string optional" 
    	    				type="text" 
    	    				name="appointment[title]" 
    	    				id="appointment_title" 
    	    				value={this.props.input_title}
    	    				onChange={this.handleChange} />
    	    		</div>
    	    		<div className="form-group datetime optional appointment_appt_time">
    	    			<label className="control-label datetime optional">Appt time</label>
    	    			<br />
    	    			<input 
    	    				type="text" 
    	    				name="appointment[appt_time]" 
    	    				value={this.props.input_appt_time} 
    	    				onChange={this.handleChange} />
    		  	    </div>

    	    		<input type="submit" name="commit" value="Create Appointment" className="btn btn-default" data-disable-with="Create Appointment" />
    	    	</form>	
		    </div>
	    );
  	}
}



