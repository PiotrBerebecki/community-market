import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Item = (props) => (
  <li>
    <Link to={props.path}>{props.itemName}</Link>
  </li>
);


Item.propTypes = {
  itemName:React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired
};


export default Item;
