import { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoContainer from "./components/TodoContainer";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import { todoItem } from "./components/helper/helper";
import "./App.scss";

const TodoApp = () => {
  const localTodos: string | null = localStorage.getItem("todos");
  let items: todoItem[] = [];
  if (localTodos) {
    items = JSON.parse(localTodos);
  }

  const [todoItems, setTodoItems] = useState<todoItem[]>(items);

  useEffect(() => {
    // Update local todos as well
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);

  // setTodoItems([]);

  return (
    <div className="container app-container">
      <TodoHeader />
      <NewTodo todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoContainer todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoFooter todoItems={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
};

export default TodoApp;
