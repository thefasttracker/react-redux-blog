import React, {Component} from 'react'
import timezones from '../../data/timezones'
import map from 'lodash/map'
// import axios from 'axios'

export default class SignupForm extends Component {
	constructor(props) {
		super (props)
		this.state = {
			username: "",
			email: "",
			password: "",
			passwordConfirmation: "",
			timezone: ""
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e) {
		e.preventDefault()
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit(e) {
		e.preventDefault()
		// axios.post('/api/users', {user: this.state})
		this.props.userSignupRequest(this.state)
	}

	render() {
		const options = map(timezones, (val, key) => 
			<option key={val} value={val}>{key}</option>
		)
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join us!</h1>
			
				<div className="form-group">
					<label className="control-label">Username</label>
					<input
						onChange={this.onChange}
						value={this.state.username} 
						type="text" 
						name="username" 
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Email</label>
					<input
						onChange={this.onChange}
						value={this.state.email} 
						type="email" 
						name="email" 
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Password</label>
					<input
						onChange={this.onChange}
						value={this.state.password} 
						type="password" 
						name="password" 
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Password Confirmation</label>
					<input
						onChange={this.onChange}
						value={this.state.passwordConfirmation} 
						type="password" 
						name="passwordConfirmation" 
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Timezone</label>
					<select
						onChange={this.onChange}
						value={this.state.timezone} 
						name="timezone"
						className="form-control"
					>
						<option value="" disabled>Choose Your Timezone</option>
						{options}
					</select>

				</div>

				<div className="form-group">
					<button className="btn btn-primary btn-lg">
						Sign up
					</button>
				</div>
			</form>
		)
	}
}

SignupForm.propTypes = {
		userSignupRequest: React.PropTypes.func.isRequired
}

