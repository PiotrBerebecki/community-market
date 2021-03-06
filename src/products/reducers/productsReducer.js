import { FETCH_PRODUCTS } from './../constants';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload.data;
    default:
      return state;
  }
}
