import React, { Component } from "react";
import logo from "./logo.svg";
import Textinput from "./textinput"
import "./App.css";

class App extends Component {
  
  constructor () {
      super();
    
      this.state = {
      userInput: "",
      displayedText: ""

    }
  }
  
  
  render() {
    return (
      <div className="App">
        <Textinput />
      </div>
    );
  }
}

export default App;
