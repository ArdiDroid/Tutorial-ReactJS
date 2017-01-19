import React from "react";
import ReactDOM from "react-dom";

import {Link} from "react-router";

export default class Item extends React.Component {

  //main pada js
  render() {
    return(
      <div>
        <h4>{this.props.namaproduk}</h4>
        <p>Desc {this.props.id}</p>
        <Link to={`/detail/${this.props.id}`}>
          <button class="btn">Detail</button>
        </Link>
      </div>
    )
  }
}
