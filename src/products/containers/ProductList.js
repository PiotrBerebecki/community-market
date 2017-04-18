import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import ProductLink from './../components/ProductLink';
import { fetchProducts } from './../actions/index.js';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    let renderProducts = 'Loading...';
    if (this.props.products.length > 0) {
      renderProducts = this.props.products.map(product => {
        return <ProductLink key={uuid()} {...product} />;
      });
    }
    return <ul>{renderProducts}</ul>;
  }
}

ProductList.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchProducts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
