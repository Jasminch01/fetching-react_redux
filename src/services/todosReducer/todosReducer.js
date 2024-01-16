import {
  GET_TODO_REQUEST,
  TODO_ERROR,
  TODO_SUCCESS,
} from "../constants/constants";

const initialState = {
  isLoading: false,
  todo: [],
  error: false,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TODO_SUCCESS:
      return {
        isLoading: false,
        todo: action.payload,
        error: false,
      };
    case TODO_ERROR:
      return {
        isLoading: false,
        todo: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default todosReducer;
