import { combineReducers } from 'redux';
import products from './products/reducers/productsReducer';
import product from './products/reducers/productReducer';
import addProduct from './add_product/reducers/addProductReducer';

export default combineReducers({
  products,
  product,
  addProduct,
});
