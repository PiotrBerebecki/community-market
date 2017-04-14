import { combineReducers } from 'redux';
import items from './itemsReducer';
import item from './itemReducer';


export default combineReducers({
  items,
  item,
});
