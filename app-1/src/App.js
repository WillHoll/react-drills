import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({
      text: event
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={event => this.handleChange(event.target.value)}/>
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

export default App;
