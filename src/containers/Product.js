import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchItem } from './../actions/index.js';


class Product extends Component {
  componentDidMount() {
    this.props.fetchItem(this.props.item.id);
  }

  render() {
    console.log('===== this.props.item', this.props.item);
    return (
      <div>
        <div>{this.props.item.id}</div>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.price}</div>
      </div>
    );
  }
}


Product.propTypes = {
  // item: PropTypes.object.isRequired,
  // fetchItem: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  item: state.item,
});


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchItem}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Product);
