import React, { Component } from "react";

class Textinput extends Component {

  constructor() {
    super();

    this.state = {
      userInput: "",
      displayedText: ""
    }
  }

  handleChange(val){
    this.setState({displayedText: val})
  }


  render (){
    return (
    <div className="textBoxes">
      <input onChange= {(e)=> this.handleChange(e.target.value) } />
      <p> {this.state.displayedText} </p>
    </div>
    )
  }
}

export default Textinput