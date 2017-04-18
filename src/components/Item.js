import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemLink = props => (
  <li>
    <Link to={`${props.slug}/${props.id}`}>{props.name}</Link>
  </li>
);

ItemLink.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ItemLink;
