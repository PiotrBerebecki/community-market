import React from 'react';


const Item = (props) => (
  <li>
    <a href={props.path}>{props.itemName}</a>
  </li>
);


export default Item;
