import { FETCH_PRODUCT } from './../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return action.payload.data[0];
    default:
      return state;
  }
}
