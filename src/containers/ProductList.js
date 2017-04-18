import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import ItemLink from './../components/Item';
import { fetchItems } from './../actions/index.js';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    let renderItems = 'Loading...';
    if (this.props.items.length > 0) {
      renderItems = this.props.items.map(item => {
        return <ItemLink key={uuid()} {...item} />;
      });
    }
    return <ul>{renderItems}</ul>;
  }
}

ProductList.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchItems }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
