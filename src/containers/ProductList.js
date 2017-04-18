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
    if (Object.keys(this.props.items).length) {
      renderItems = Object.keys(this.props.items).map(key => {
        return <ItemLink key={uuid()} {...this.props.items[key]} />;
      });
    }
    return <ul>{renderItems}</ul>;
  }
}

ProductList.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchItems }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
