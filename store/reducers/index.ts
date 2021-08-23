import { v4 as uuidv4 } from "uuid";
import { ADD_TODO } from "../constants";

const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { ...action.data, completed: false, id: uuidv4() },
        ],
      };
    default:
      return state;
  }
};
