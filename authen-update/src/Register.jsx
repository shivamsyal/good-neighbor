import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
			first_name :  '',
      last_name :   '',
      email :       '',
			p_num :       '',
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
		axios.post('http://127.0.0.1:8000/api/auth/register', this.state)

	}

	render() {
		const { first_name, last_name, email, p_num, username, password } = this.state
		return (
			<div className="col-md-6 col-md-offset-3">
      <h2>Register</h2>
				<form name="form" onSubmit={this.submitHandler}>
					<div className="form-group">
          <label htmlFor="first_name" >First Name</label>
						<input
							type="text"
							name="first_name"
							value={first_name}
							onChange={this.changeHandler}
              className="form-control"
						/>
					</div>
					<div className="form-group">
          <label htmlFor="last_name" >Last Name</label>
						<input
							type="text"
							name="last_name"
							value={last_name}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
					<div className="form-group">
          <label htmlFor="email" >Email</label>
						<input
							type="text"
							name="email"
							value={email}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
					<div className="form-group">
          <label htmlFor="p_num" >Phone Number</label>
						<input
							type="number"
							name="p_num"
							value={p_num}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
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
          <button className="btn btn-primary" type="submit">Register</button>
				</form>
			</div>
		)
	}
}
export default Register
