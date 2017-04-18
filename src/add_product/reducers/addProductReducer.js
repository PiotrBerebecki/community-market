import { ADD_PRODUCT } from './../constants';

export default function(state = [], action) {
  // console.log('===== action.payload', action.payload.);
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload.data.id];
    default:
      return state;
  }
}
