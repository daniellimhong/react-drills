import React, { Component } from "react";
import "./App.css";

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    ketoFood: ["eggs", "bacon", "steak", "butter", "idk what else"]
  };
}
  render() {
    let foodDisplay = this.state.ketoFood.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });    
    return <div className="App">{foodDisplay}</div>
  }
}

export default App;
