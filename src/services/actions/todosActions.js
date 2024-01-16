import axios from "axios";
import {
  GET_TODO_REQUEST,
  TODO_ERROR,
  TODO_SUCCESS,
} from "../constants/constants";

const todosActions = () => {
  return async (dispatch) => {
    dispatch({ type: GET_TODO_REQUEST });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch({ type: TODO_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: TODO_ERROR, payload: error.message });
    }
  };
};

export default todosActions;
