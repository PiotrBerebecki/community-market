import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';


const ItemLink = (props) => (
  <li>
    <Link to={props.path}>{props.name}</Link>
  </li>
);


ItemLink.propTypes = {
  // name: PropTypes.string.isRequired,
  // path: PropTypes.string.isRequired
};


export default ItemLink;
