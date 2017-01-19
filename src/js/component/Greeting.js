import React from "react";
import ReactDOM from "react-dom";

export default class Greeting extends  React.Component {

  //main pada js
  render() {
    return(
      <div>
        Haii, {this.props.name} Umur {this.props.umur} <br/><br/>
      </div>
    )
  }
}
