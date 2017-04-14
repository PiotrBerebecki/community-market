import { FETCH_ITEM } from './../constants';

const item = {
  name: 'Thing',
  price: '13412344124'
};

export default function(state = item, action) {
  switch (action.type) {
    case FETCH_ITEM:
      return action.payload;

    default:
      return state;
  }

}
