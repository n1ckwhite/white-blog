import {
  GET_ARTICLES_ERROR,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_RESPONSE,
} from "../action";

const initialState = {
  articles: [],
  pending: false,
  error: {},
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case GET_ARTICLES_RESPONSE: {
      return {
        ...state,
        articles: action.payload,
      };
    }
    case GET_ARTICLES_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
