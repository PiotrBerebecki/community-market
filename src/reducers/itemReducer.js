import { FETCH_ITEM } from './../constants';

// const currentItem = {
//   name: 'Thing',
//   price: '13412344124'
// };

export default function(state = {}, action) {
  // console.log('action.payload', action.payload);
  switch (action.type) {
    case FETCH_ITEM:
      return action.payload.data;
    default:
      return state;
  }
}
