import uuid from "react-native-uuid";
import { ADD_TODO, CHANGE_TODO } from "../constants";

const initialState = {
  todos: [],
};

const updateValue = (state: any, value: boolean, id: string) => {
  const stateCopy = [...state.todos];
  const todo = stateCopy.find((todo: any) => {
    return todo.id === id;
  });
  todo.completed = value;
  return {
    todos: [...stateCopy],
  };
};

export const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { ...action.data, completed: false, id: uuid.v4() },
        ],
      };
    case CHANGE_TODO:
      return updateValue(state, action.value, action.id);
    default:
      return state;
  }
};
