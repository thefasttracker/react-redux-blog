import React, {Component} from 'react'
import timezones from '../../data/timezones'
import map from 'lodash/map'
import classnames from 'classnames'
// import axios from 'axios'

export default class SignupForm extends Component {
	constructor(props) {
		super (props)
		this.state = {
			username: "",
			email: "",
			password: "",
			passwordConfirmation: "",
			timezone: "",
			errors: {},
			isLoading: false
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
		this.setState({ errors: {}, isLoading: true})
		e.preventDefault()
		// axios.post('/api/users', {user: this.state})
		this.props.userSignupRequest(this.state).then(
			() => {},
			({ data }) => this.setState({ errors: data, isLoading: false })
		)
	}

	render() {
		const { errors } = this.state
		const options = map(timezones, (val, key) => 
			<option key={val} value={val}>{key}</option>
		)
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join us!</h1>
			
				<div className={classnames("form-group", {'has-error': errors.username})}>
					<label className="control-label">Username</label>
					<input
						onChange={this.onChange}
						value={this.state.username} 
						type="text" 
						name="username" 
						className="form-control"
					/>
					{errors.username && <span className="help-block">{errors.username}</span>}
				</div>

				<div className={classnames("form-group", {'has-error': errors.email})}>
					<label className="control-label">Email</label>
					<input
						onChange={this.onChange}
						value={this.state.email} 
						type="email" 
						name="email" 
						className="form-control"
					/>
					{errors.email && <span className="help-block">{errors.email}</span>}
				</div>

				<div className={classnames("form-group", {'has-error': errors.password})}>
					<label className="control-label">Password</label>
					<input
						onChange={this.onChange}
						value={this.state.password} 
						type="password" 
						name="password" 
						className="form-control"
					/>
					{errors.password && <span className="help-block">{errors.password}</span>}
				</div>

				<div className={classnames("form-group", {'has-error': errors.passwordConfirmation})}>
					<label className="control-label">Password Confirmation</label>
					<input
						onChange={this.onChange}
						value={this.state.passwordConfirmation} 
						type="password" 
						name="passwordConfirmation" 
						className="form-control"
					/>
					{errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
				</div>

				<div className={classnames("form-group", { 'has-error': errors.timezone })}>
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
					{errors.timezone && <span className="help-block">{errors.timezone}</span>}
				</div>

				<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
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

