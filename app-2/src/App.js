import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
  super()
  this.state = {
    array : ["banana", "boat", "blue"]
  }

} 
  render() {
    let arrayDisplay = this.state.array.map((item, index)=>{
      return <h2 key={index}>{item}</h2>
        })
        
      return ( <div className="App">{arrayDisplay}</div>)  
        
  }
}

export default App;
