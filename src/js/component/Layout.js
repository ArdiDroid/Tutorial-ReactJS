import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer  from "./Footer";

export default class Layout extends  React.Component {
  //constructor awal2 untuk init nilai
  // constructor(){
  //   super();
  //   this.message = "Haloooo! ";
  // }
  //
  // //parameter method
  // getName(param){
  //   return "Nilainya : " + param;
  // }

  constructor(){
    super();
    this.state = {
      name1: "Spongebob",
      name2: "Mr Krabs"
    };
  }

  changeName1(param){
      this.setState({name1: param});
  }
  changeName2(param){
      this.setState({name2: param});
  }

  //main pada js
  render() {
    // var name = "nama saya Putra";

    //checking and show in console
    var counter = 1;
    console.log("true" + counter);
    counter++;
    //end counter

    // setTimeout(function(){
    //   this.setState({name: "Mr Krabs"})
    // }.bind(this),3000);
    //

    return(
      // <h1>{this.message}<br/>
      // {name} {this.getName(1)} </h1>
      <div>

        <Header name={this.state.name1}
          inputValue={this.state.name2}
          onInputChange={this.changeName2.bind(this)}/>

        <br/>

        <Header name={this.state.name2}
          inputValue={this.state.name1}
          onInputChange={this.changeName1.bind(this)}/>

        <Footer/>
      </div>
    )
  }
}

// ini untuk button
// <button onClick={this.changeName.bind(this, "MrKrabs")}>
// Click ini
// </button>
