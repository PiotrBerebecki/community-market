import { FETCH_ITEMS } from './../constants';


const items =  [
  { itemName: 'TV', path: 'tv'},
  { itemName: 'Phone', path: 'phone'},
  { itemName: 'Jeans', path: 'jeans'},
];


export default function(state = items, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return [...state, action.payload];
    default:
      return state;
  }
}
