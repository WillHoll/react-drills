import React, { Component } from "react";
import "./App.css";
import Todo from './component/Todo'

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      taskList: []
    }
  }

  inputHandler(input){
    this.setState({input: input})
  }

  addTodo() {
    this.setState({
      taskList: [...this.state.taskList, this.state.input],
      input: ''
    })
  }

  render() {
    let arrDisplay = this.state.taskList.map((el, i) => <Todo key={i} task={el}/>);
    return (
      <div className="App">
        <h1>My to-do List:</h1>
        <input value={this.state.input} onChange={e => this.inputHandler(e.target.value)}/>
        <button onClick={() => this.addTodo()}>Add</button>
        <div>{arrDisplay}</div>
      </div>
    );
  }
}

export default App;
