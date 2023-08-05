import { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoContainer from "./components/TodoContainer";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import { todoItem } from "./components/helper/helper";
import "./App.scss";

const App = () => {
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

  const [selectedState, setSelectedState] = useState<string>("all");

  // setTodoItems([]);

  return (
    <div className="container app-container">
      <TodoHeader />
      <NewTodo todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoContainer
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        selectedState={selectedState}
      />
      <TodoFooter
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
    </div>
  );
};

export default App;
