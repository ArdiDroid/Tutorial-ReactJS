import React from "react";
import ReactDOM from "react-dom";

export default class Detail extends  React.Component {

  //main pada js
  render() {
    return(
      <div>
        This is detail ID : {this.props.params.id}
      </div>
    )
  }
}
