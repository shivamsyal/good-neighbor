import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'

class App extends Component {
	render() {
		return (
			<div className="App">
      <div className="jumbotron">
          <div className="container">
              <div className="col-sm-8 col-sm-offset-2">
                  <Login />
              </div>
          </div>
      </div>

				{/* <PostList /> */}
			</div>
		)
	}
}

export default App
