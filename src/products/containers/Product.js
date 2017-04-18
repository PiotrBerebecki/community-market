import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProduct } from './../actions/index.js';

class Product extends Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.id);
    // console.log('===== this.props.slug', this.props.slug);
  }

  render() {
    return (
      <div>
        <div>{this.props.product.id}</div>
        <div>{this.props.product.product_name}</div>
        <div>{this.props.product.price}</div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  fetchProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchProduct }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
