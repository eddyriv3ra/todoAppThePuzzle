import { ADD_TODO } from "../constants";

export const addTodo = (data: any) => ({
  type: ADD_TODO,
  data,
});
