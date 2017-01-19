import React from "react";
import ReactDOM from "react-dom";

import Header2 from "../component/Header2";

export default class Layout2 extends React.Component {

  //main pada js
  render() {
    return(

      <div>
        <Header2/>

        {this.props.children}

        <footer>
        <h1>ini footer</h1>
        </footer>
      </div>
    )
  }
}
