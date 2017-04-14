import React, { Component } from 'react';
import uuid from 'uuid';

import Item from './../components/Item';


class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { itemName: 'TV', path: 'tv'},
        { itemName: 'Phone', path: 'phone'},
        { itemName: 'Jeans', path: 'jeans'},
      ]
    };
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item => <Item key={uuid()} {...item}/>)}
      </ul>
    );
  }
}


export default ProductList;
