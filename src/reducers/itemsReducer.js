import { FETCH_ITEMS } from './../constants';


const items =  [
  // { id: 1, itemName: 'TV', path: 'tv'},
  // { id: 2, itemName: 'Phone', path: 'phone'},
  // { id: 3, itemName: 'Jeans', path: 'jeans'},
];


export default function(state = items, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return [...state, action.payload];
    default:
      return state;
  }
}
