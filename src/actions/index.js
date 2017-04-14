import { FETCH_ITEM } from './../constants';
import axios from 'axios';


export function fetchItem(id) {
  const request = axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
  return {
    type: FETCH_ITEM,
    payload: request,
  };
  // .then(res => {
  //   dispatch({
  //     type: FETCH_ITEM,
  //     payload: {
  //       name: res.data.title,
  //       price: res.data.id
  //     }
  //   });
  // });
}
