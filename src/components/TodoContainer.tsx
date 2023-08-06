import { useContext } from "react";
import TodoItem from "./TodoItem";
import todosContext, { Todo } from "../context/todos/todosContext";
import { useSearchParams } from "react-router-dom";

const TodoContainer = () => {
  const [params] = useSearchParams();
  const state: string = params.get("todos") ?? "";

  const { todos } = useContext(todosContext);

  return (
    <div className="todo-container">
      <ul className="todo-items">
        {todos
          ?.filter((todo: Todo) => {
            if (state === "active") {
              return !todo.completed;
            }
            if (state === "completed") {
              return todo.completed;
            }
            return true;
          })
          .map((todo: Todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
      </ul>
    </div>
  );
};

export default TodoContainer;
