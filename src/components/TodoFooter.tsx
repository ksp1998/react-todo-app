import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import todosContext, { Todo } from "../context/todos/todosContext";

const TodoFooter = () => {
  const [params] = useSearchParams();
  const state: string = params.get("todos") ?? "";

  const { todos, clearCompletedTodos } = useContext(todosContext);

  return (
    <div className="todo-footer">
      <p className="itmes-left">
        {`${
          todos && todos?.length > 0
            ? todos?.filter((todo: Todo) => !todo.completed).length
            : "No"
        } items left!`}
      </p>
      <nav className="todo-states">
        <Link
          to=""
          className={`todo-state ${
            state === "all" || state === "" ? "active" : ""
          }`}
        >
          All
        </Link>
        <Link
          to="?todos=active"
          className={`todo-state ${state === "active" ? "active" : ""}`}
        >
          Active
        </Link>
        <Link
          to="?todos=completed"
          className={`todo-state ${state === "completed" ? "active" : ""}`}
        >
          Completed
        </Link>
      </nav>
      <button id="btn-clear-completed" onClick={clearCompletedTodos}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoFooter;
