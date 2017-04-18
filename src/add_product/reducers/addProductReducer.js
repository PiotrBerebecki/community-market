import { ADD_PRODUCT } from './../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return state;
    default:
      return state;
  }
}
