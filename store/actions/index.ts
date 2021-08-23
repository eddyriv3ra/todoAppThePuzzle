import { ADD_TODO, CHANGE_TODO, GET_STORAGE_TODOS } from "../constants";

export const addTodo = (data: any) => ({
  type: ADD_TODO,
  data,
});

export const changeTodo = (value: any, id: string) => ({
  type: CHANGE_TODO,
  value,
  id,
});

export const getStorageTodos = (todos: any) => ({
  type: GET_STORAGE_TODOS,
  todos,
});
