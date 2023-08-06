import { ReactNode, useEffect, useState } from "react";
import TodosContext, { Todo } from "./todosContext";

interface Props {
  children: ReactNode;
}

const TodosState = ({ children }: Props) => {

  const todoItems: string | null = localStorage.getItem("todos");
  const localTodos: Todo[] = JSON.parse(todoItems ?? "[]");
  const [todos, setTodos] = useState<Todo[]>(localTodos);

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  const toggleTodoState = (id: number) => {
    const newTodos: Todo[] = todos.map((todo: Todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    const newTodos: Todo[] = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const clearCompletedTodos = () => {
    const newTodos = todos.filter((todo: Todo) => !todo.completed);
    setTodos(newTodos);
  };

  useEffect(() => {
    // Update local todos as well
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodoState,
        removeTodo,
        clearCompletedTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosState;
