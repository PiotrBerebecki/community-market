import { FETCH_ITEMS, FETCH_ITEM } from './../constants';
import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_DATABASE_URL_LOCALHOST
  : process.env.REACT_APP_DATABASE_URL_HEROKU;

export function fetchItem(id) {
  const request = axios.get(`${baseUrl}/products?id=${id}`);
  return {
    type: FETCH_ITEM,
    payload: request,
  };
}

export function fetchItems() {
  const request = axios.get(`${baseUrl}/products`);
  return {
    type: FETCH_ITEMS,
    payload: request,
  };
}
