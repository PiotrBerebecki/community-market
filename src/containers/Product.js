import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Product extends Component {
  render() {
    return (
      <div>
        <div>{this.props.item.name }</div> 
        <div>{this.props.item.price }</div>
      </div>
    );
  }
}


Product.propTypes = {
  item: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, null)(Product);
