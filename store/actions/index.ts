import { ADD_TODO, CHANGE_TODO } from "../constants";

export const addTodo = (data: any) => ({
  type: ADD_TODO,
  data,
});

export const changeTodo = (value: any, id: string) => ({
  type: CHANGE_TODO,
  value,
  id,
});
