import { FETCH_ITEM } from './../constants';

const currentItem = {
  name: 'Thing',
  price: '13412344124'
};

export default function(state = currentItem, action) {
  switch (action.type) {
    case FETCH_ITEM:
      return action.payload;
    default:
      return state;
  }
}
