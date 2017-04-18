import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductLink = props => (
  <li>
    <Link to={`${props.slug}/${props.id}`}>{props.product_name}</Link>
  </li>
);

ProductLink.propTypes = {
  product_name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductLink;
