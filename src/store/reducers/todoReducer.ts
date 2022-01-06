import * as actions from "../types";

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action: actions.ActionTypes) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        todoList: action.payload,
      };
    case actions.RESET_STATE:
      return {
        ...state,
        todoList: [],
      };
    case actions.MARK_TODO_AS_DONE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default todoReducer;
