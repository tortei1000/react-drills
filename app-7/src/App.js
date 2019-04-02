import React, { Component } from "react";
import ToDo from "./ToDo"
import "./App.css";
import NewTask from "./NewTask";
import List from "./List"

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

  // addList = () => {

  // }

  render() {
    return (
      <div className="App">
        <List listing ={this.addList} array={this.state.array}/>
        <input onChange={e => this.handleChange(e.target.value)} />
        <NewTask itemToAdd ={this.addItem} userInput={this.state.userInput}/>
        
        {/* <ToDo task ={this.state.array}/> */}
      </div>
    );
  }
}

export default App;
