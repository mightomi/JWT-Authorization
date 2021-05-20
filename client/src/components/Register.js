import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
        <div>
          <h1>Register</h1>
          <form action="/register" method="POST">

          <label for="username">Username</label>
          <input type="text" id="username" name="username" required/>
          <br></br>
          
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required/>
          <br></br>

          <button type="submit" onclick="alert('Registration success Login Now')">Register </button>
          </form>

          <br></br>
          <a href="/login">Already a user Login Here</a>
        </div>
    );
  }
}

export default Register;