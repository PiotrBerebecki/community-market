import { FETCH_ITEM } from './../constants';
import axios from 'axios';


export function fetchItem(dispatch, id) {
  axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FETCH_ITEM,
        payload: {
          name: res.data.title,
          price: res.data.id
        }
      });
    });
}
