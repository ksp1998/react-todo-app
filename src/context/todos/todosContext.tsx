import { createContext } from "react";

export interface Todo {
  id: number;
  name: string;
  completed?: boolean;
  createdAt?: Date;
}

interface TodosStates {
  todos?: Todo[];
  addTodo?: (todo: Todo) => void;
  toggleTodoState?: (id: number) => void;
  removeTodo?: (id: number) => void;
  clearCompletedTodos?: () => void;
}

const todosContext = createContext<TodosStates>({});

export default todosContext;
