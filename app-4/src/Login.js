import React, {Component} from 'react';
import "./App.css";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: "",
        password: ""
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsernameChange(name) {
      this.setState({ username: name })
  }

  handlePasswordChange(pass) {
      this.setState({ password: pass })
  }

  handleLogin() {
      alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render(){
      return(
      <div>
          <input 
          onChange={ event => this.handleUsernameChange(event.target.value) }
          type="text"
          />
          <input 
          onChange={ event => this.handlePasswordChange(event.target.value) }
          type="text"
          />
          <button onClick={this.handleLogin}>Login</button>
      </div>
      )
  }
}

export default Login