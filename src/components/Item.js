import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ItemLink = (props) => (
  <li>
    <Link to={props.path}>{props.itemName}</Link>
  </li>
);


ItemLink.propTypes = {
  itemName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};


export default ItemLink;
