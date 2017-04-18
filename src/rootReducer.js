import { combineReducers } from 'redux';
import products from './products/reducers/productsReducer';
import product from './products/reducers/productReducer';

export default combineReducers({
  products,
  product,
});
