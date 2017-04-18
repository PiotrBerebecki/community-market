import { FETCH_ITEM } from './../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ITEM:
      return action.payload.data[0];
    default:
      return state;
  }
}
