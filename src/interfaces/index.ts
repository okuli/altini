export interface TodoItem {
  id: string;
  title: string;
  description: string;
  status: string;
  user: string;
}

export interface ReduxState {
  tasks: {
    todoList: TodoItem[];
  };
}

export interface User {
  name: string;
}
