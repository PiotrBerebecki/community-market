import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import ItemLink from './../components/Item';


const ProductList = (props) => {
  const renderItems = props.items.map(item => <ItemLink  key={uuid()} {...item}/>);
  return (
    <ul>
      {renderItems}
    </ul>
  );
};


ProductList.propTypes = {
  items: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => ({
  items: state.items
});


export default connect(mapStateToProps, null)(ProductList);
