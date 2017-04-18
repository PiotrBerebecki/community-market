import axios from 'axios';
import { ADD_PRODUCT } from './../constants';

const baseUrl = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_DATABASE_URL_LOCALHOST
  : process.env.REACT_APP_DATABASE_URL_HEROKU;

export function addProduct(product) {
  const request = axios.post(`${baseUrl}/add-product`, product);

  // console.log('===== product', product);
  return {
    type: ADD_PRODUCT,
    payload: request,
  };
}
