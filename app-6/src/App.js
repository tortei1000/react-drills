import React, { Component } from "react";
import ToDo from "./todo"
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      array : [],
      userInput : ""
    }
  }

  handleChange =(val)=> {
    this.setState({userInput: val})
  }

  addItem = (userInput)=> {
    let arr = [...this.state.array]
    arr.push(userInput)
    this.setState({array:arr})
  }


  render() {
    return (
      <div className="App">

       <input onChange={e => this.handleChange(e.target.value)} />
       <button onClick ={ () => { this.addItem(this.state.userInput) }}> Add Item </button>
       <ToDo task ={this.state.array}/>
      </div>
    );
  }
}

export default App;
