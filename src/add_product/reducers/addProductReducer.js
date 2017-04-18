import { ADD_PRODUCT } from './../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return state;
    default:
      return state;
  }
}
