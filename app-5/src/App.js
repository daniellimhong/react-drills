import React, { Component } from "react";
import "./App.css";
import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"http://devhumor.com/content/uploads/images/June2019/js.jpg"}/>
      </div>
    );
  }
}

export default App;
