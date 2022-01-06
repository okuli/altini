import { TodoItem } from "../../interfaces";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_TODO_AS_DONE = "MARK_TODO_AS_DONE";
export const RESET_STATE = "RESET_STATE";

export type ActionTypes =
  | { type: typeof ADD_TODO; payload: TodoItem[] }
  | { type: typeof REMOVE_TODO; payload: string }
  | { type: typeof MARK_TODO_AS_DONE }
  | { type: typeof RESET_STATE };
