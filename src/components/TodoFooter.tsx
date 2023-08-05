import { todoItem } from "./helper/helper";
import { Link, useSearchParams } from "react-router-dom";

interface Props {
  todoItems: todoItem[];
  setTodoItems: (todoItems: todoItem[]) => void;
}

const TodoFooter = ({ todoItems, setTodoItems }: Props) => {
  const [params] = useSearchParams();
  const state: string = params.get("todos") ?? "";

  const handleClearCompleted = () => {
    const items = todoItems.filter(
      (todoItem: todoItem) => todoItem.state === 0
    );
    setTodoItems(items);
  };

  return (
    <div className="todo-footer">
      <p className="itmes-left">
        {`${
          todoItems.length > 0
            ? todoItems.filter((todoItem: todoItem) => !todoItem.state).length
            : "No"
        } items left!`}
      </p>
      <nav className="todo-states">
        <Link
          to=""
          // onClick={handleStateChange}
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
      <button id="btn-clear-completed" onClick={handleClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoFooter;
