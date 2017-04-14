import React, { Component } from 'react';
import uuid from 'uuid/v4';

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
    const renderItems = this.state.items.map(item => <Item  key={uuid()} {...item}/>);
    return (
      <ul>
        {renderItems}
      </ul>
    );
  }
}


export default ProductList;
