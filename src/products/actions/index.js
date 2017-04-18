import { FETCH_PRODUCTS, FETCH_PRODUCT } from './../constants';
import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_DATABASE_URL_LOCALHOST
  : process.env.REACT_APP_DATABASE_URL_HEROKU;

export function fetchProduct(id) {
  const request = axios.get(`${baseUrl}/products?id=${id}`);
  return {
    type: FETCH_PRODUCT,
    payload: request,
  };
}

export function fetchProducts() {
  const request = axios.get(`${baseUrl}/products`);
  return {
    type: FETCH_PRODUCTS,
    payload: request,
  };
}
