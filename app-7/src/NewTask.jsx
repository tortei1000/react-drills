import React, { Component } from "react";

function NewTask(props) {
 
  return (
    <button onClick ={ () => { props.itemToAdd(props.userInput) }}> Add </button>
  )
}

export default NewTask
