import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: ""
    }
  }

  handleChange(value){
    this.setState({
      message: value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
       <input 
       onChange = { event => this.handleChange(event.target.value)}
       type="text" p
       laceholder="type here"
       />
       <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
