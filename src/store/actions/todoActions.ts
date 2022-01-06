import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ReduxState, TodoItem } from "../../interfaces";
import * as actions from "../types";

export const addTodo =
  (
    todoList: TodoItem[],
    todo: TodoItem
  ): ThunkAction<void, ReduxState, unknown, Action<string>> =>
  (dispatch) => {
    console.log(todoList);
    const updatedTodoList = todoList.concat(todo);
    dispatch({
      type: actions.ADD_TODO,
      payload: updatedTodoList,
    });
  };

export const removeTodo =
  (
    todoList: TodoItem[],
    todo: TodoItem
  ): ThunkAction<void, ReduxState, unknown, Action<string>> =>
  (dispatch) => {
    const updatedTodoList = todoList.filter(
      (item: TodoItem) => item.id !== todo.id
    );
    dispatch({
      type: actions.ADD_TODO,
      payload: updatedTodoList,
    });
  };

export const markTodoAsDone =
  (
    todoList: TodoItem[],
    todo: TodoItem,
    status: string
  ): ThunkAction<void, ReduxState, unknown, Action<string>> =>
  (dispatch) => {
    const updatedTodo = todoList.find((item: TodoItem) => item.id === todo.id);
    if (updatedTodo) {
      updatedTodo.status = status;
      dispatch({
        type: actions.MARK_TODO_AS_DONE,
        payload: "updated todo successfully",
      });
    }
  };

export const resetState =
  (): ThunkAction<void, ReduxState, unknown, Action<string>> => (dispatch) => {
    dispatch({
      type: actions.RESET_STATE,
    });
  };
