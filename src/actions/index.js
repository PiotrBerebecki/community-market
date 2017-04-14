import { FETCH_ITEMS, FETCH_ITEM } from './../constants';
import axios from 'axios';


export function fetchItem(id) {
  const request = axios.get(`https://community-market-api.herokuapp.com/products?id=1`);
  // const request = axios.get(`http://community-market-api.herokuapp.com/products?id=${id}`);
  return {
    type: FETCH_ITEM,
    payload: request,
  };
}


export function fetchItems() {
  const request = axios.get(`https://community-market-api.herokuapp.com/products`);
  return {
    type: FETCH_ITEMS,
    payload: request,
  };
}
