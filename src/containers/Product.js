import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Product extends Component {
  render() {
    return (
      <div>{this.props.item}</div>
    );
  }
}


Product.propTypes = {
  item: PropTypes.string.isRequired,
};


export default Product;
