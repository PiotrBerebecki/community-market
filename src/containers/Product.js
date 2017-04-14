import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { fetchItem } from './../actions/index.js';


class Product extends Component {
  componentWillMount() {
    console.log('===== typeof this.props.dispatch', typeof this.props.dispatch);
    fetchItem(this.props.dispatch, '1');
    // this.props.fetchItem(this.props.dispatch, '1');
  }

  render() {
    return (
      <div>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.price}</div>
      </div>
    );
  }
}


Product.propTypes = {
  item: PropTypes.object.isRequired,
  // fetchItem: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  item: state.item,
});


// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({fetchItem}, dispatch);
// };


export default connect(mapStateToProps, null)(Product);
// export default Product;
