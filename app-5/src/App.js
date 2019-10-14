import React, { Component } from "react";
import "./App.css";
import Image from './component/Image'

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <Image 
          url={'https://picsum.photos/seed/plol/200/300'}
        />
      </div>
    );
  }
}

export default App;
