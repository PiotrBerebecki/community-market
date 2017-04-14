import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';

const items =  [
  { itemName: 'TV', path: 'tv'},
  { itemName: 'Phone', path: 'phone'},
  { itemName: 'Jeans', path: 'jeans'},
];

export default combineReducers({
  itemsReducer,
});
