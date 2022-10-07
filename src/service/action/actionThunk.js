import {
  GET_ARTICLES_ERROR,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_RESPONSE,
} from ".";

import { getDocs } from "firebase/firestore";
import { colRef } from "../../components/firebaseConfig";
export const getArticlesAll = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ARTICLES_REQUEST,
    });
    getDocs(colRef)
    .then((snapshot) => {
      const arr = [];
      snapshot.docs.map((i) => {
        arr.push({...i.data(),id:i.id});
        dispatch({
          type: GET_ARTICLES_RESPONSE,
          payload: arr,
        })
        if(arr.length === 0) {
            dispatch({
                type:GET_ARTICLES_ERROR,
                payload: {message: 'Что-то пошло не так =('}
            })
        }
      });
    })
  };
};
