import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username : "",
      password : ""
    }

    this.handleUserName = this.handleUserName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.loginUser = this.loginUser.bind(this)

  }


  handleUserName(e){
    this.setState({username:e.target.value})
  }

  handlePassword(e){
    this.setState({password:e.target.value})
  }

  loginUser(){
    alert(`Username ${this.state.username} password ${this.state.password}`)
  }

  render(){
    return (
      <div>
        <input onChange={this.handleUserName}  placeholder="Username" />
        <input onChange={this.handlePassword} placeholder="Password" />
        <button onClick={this.loginUser}>Login</button>
      </div>
    )
  }

}

export default Login