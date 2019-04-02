import React, { Component } from "react";
import Image from "./image"
import "./App.css";

class App extends Component {
  
    
  render() {

    
    return (
      <div className="App">
        <Image myImage={"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} />
        
      </div>
    );
  }
}

export default App;
