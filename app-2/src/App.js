import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: ['Iron Giant', 'Back to the Future', '1984', 'A Farewell to Arms']
    }
  }

  render() {
    let dataDisplay = this.state.data.map((el, i) => <h2 key={i}>{el}</h2>)
    return (
      <div className="App">
        <div>{dataDisplay}</div>
      </div>
    );
  }
}

export default App;
