import React, { Component } from "react";

class Image extends Component{
  constructor(props){
    super()
  }
  render(){
    return (
      
      <div>
       <img src={this.props.myImage}  />
      </div>
    )
  }
}

export default Image