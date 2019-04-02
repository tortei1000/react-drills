import React, { Component } from "react";

import "./App.css";

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      userInput: "",
      array: ["banana", "agua", "mundo", "english"]
    }
  }
  
  onChange (val) {
    this.setState({userInput: val})
  }
  
  render() {

    let displayArray = this.state.array
      .filter((element, index) => {
        return element.includes(this.state.userInput)
        
      })
      .map((element, index)=>{
        return <h2 key={index}>{element}</h2>
      })
    
    
    
    return ( 
      <div className="App">   
      <input className="inputArea" onChange={e=>this.onChange(e.target.value)} type="text"/>
      {displayArray}  
      </div>)
    
  }
}

export default App;
