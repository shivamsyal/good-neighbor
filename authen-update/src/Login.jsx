import React, { Component } from 'react'
import axios from 'axios'
import Logo from './logo.png';
import './index.css'

class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
      username :    '',
      password :    ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://127.0.0.1:8000/api/auth/login', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { username, password } = this.state
		return (
			<div className="col-md-6 col-md-offset-3">

      <h2>Login</h2>
				<form name="form" onSubmit={this.submitHandler}>

					<div className="form-group">
          <label htmlFor="username" >Username</label>
						<input
							type="text"
							name="username"
							value={username}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
					<div className="form-group">
          <label htmlFor="password" >Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
          <button className="btn btn-primary" type="submit">Login</button>
				</form>
			</div>
		)
	}
}
export default Register
