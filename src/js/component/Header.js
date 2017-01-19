import React from "react";
import ReactDOM from "react-dom";

import Greeting from "./Greeting";

export default class Header extends React.Component {

  changeHandler(e){
    var nameParam = e.target.value;

    this.props.onInputChange(nameParam);
  }

  //main pada js
  render() {
    // console.debug(this.props);
    return(
      <div>
        {this.props.name}
        <header>Header ini broo</header>
        <Greeting name={this.props.name} umur={this.props.umur}/>
      <input type="text" value={this.props.inputValue} onChange={this.changeHandler.bind(this)}/>
      </div>
    )
  }
}
