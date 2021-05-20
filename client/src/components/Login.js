import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <div>
          <h1>Login Here</h1>
	
          <form action="/login" method="post">

            <label for="username">Username</label>
            <input type="text" id="username" name="username" required />
            <br></br><br></br>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required/>

            <br></br><br></br>
            <input type="submit" value="login"/>
          </form>

          <br></br>
          <a href="/register">Register Here</a>
        </div>
    );
  }
}

export default Login;