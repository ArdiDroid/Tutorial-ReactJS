import React from "react";
import ReactDOM from "react-dom";

import Item from "../component/Item";

export default class ProductList extends  React.Component {


  //main pada js
  render() {
    var productlist = [
      {id:"121", name:"Handphone"},
      {id:"122", name:"Mobil"},
      {id:"123", name:"Motor"},
      {id:"124", name:"TV"}
    ].map( (obj) =>
      <Item key={obj.id} namaproduk={obj.name} id={obj.id}></Item>
    );
    return(
      <div>
        This is a productlist <br/>
        {productlist}
      </div>
    )
  }
}
