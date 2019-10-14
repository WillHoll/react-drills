import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state ={
      array: ['Oregano','Basil', 'Tumeric', 'Cumim', 'Sage', 'Thyme', 'Parsley', 'Paprika', 'Rosemery', 'Cilantro', 'Sasafrass', 'Bay leaves', 'Jasmine'],
      filteredArray: []
    }
  }
  

  filterThrough(input) {
    let stateArray = this.state.array;
    let newArray = [];
    for (let i = 0; i < stateArray.length; i++) {
      if (stateArray[i].includes(input)) {
        newArray.push(stateArray[i])
      }
    }
    this.setState({filteredArray: newArray})
  }

  render() {
    let arrayDisplay = this.state.filteredArray.map((el, i) => <h2 key={i}>{el}</h2>)
    return (
      <div className="App">
        <input onChange={(event) => this.filterThrough(event.target.value)}/>
      <div>{arrayDisplay}</div>
      </div>
    );
  }
}

export default App;
