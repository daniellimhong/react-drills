import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      filterString: "",
      ketoFood: ["eggs", "bacon", "steak", "butter", "cheese"]
    };
  }
  
  handleChange(filter) {
    this.setState({ filterString: filter })
  }
  
  render() {
    let displayList = this.state.ketoFood.filter((element, index) => {
      return element.includes(this.state.filterString);
      });
      this.state.ketoFood.map((element,index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return (
    <div className="App">
    <input onChange={ event => this.handleChange(event.target.value) } 
    type="text"/>
    {displayList}
    </div>
    )
  }  
};


export default App;

// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filterString: "",
//       foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
//     };
//   }

//   handleChange(filter) {
//     this.setState({ filterString: filter });
//   }

//   render() {
//     let foodsToDisplay = this.state.foods
//       .filter((element, index) => {
//         return element.includes(this.state.filterString);
//       })
//       .map((element, index) => {
//         return <h2 key={index}>{element}</h2>;
//       });

//     return (
//       <div className="App">
//         <input onChange={e => this.handleChange(e.target.value)} type="text" />
//         {foodsToDisplay}
//       </div>
//     );
//   }
// }

// export default App;
