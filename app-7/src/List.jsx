import React, { Component } from "react";

function List(props) {
 
  return (
        
    <p>{props.array.map(e => <li>{e}</li>)}</p>
    //props.array
    //props.listing()
    
  )
}


export default List
