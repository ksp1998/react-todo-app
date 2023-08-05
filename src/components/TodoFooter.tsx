import { MouseEvent } from "react";
import { todoItem } from "./helper/helper";

interface Props {
  todoItems: todoItem[];
  setTodoItems: (todoItems: todoItem[]) => void;
  selectedState?: string;
  setSelectedState: (selectedState: string) => void;
}

const TodoFooter = ({
  todoItems,
  setTodoItems,
  selectedState,
  setSelectedState,
}: Props) => {
  if (!selectedState) {
    selectedState = "all";
  }

  const handleStateChange = (li: MouseEvent<HTMLLIElement>) => {
    const state = (li.target as HTMLInputElement)?.value;
    setSelectedState(state);
  };

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
      <ul className="todo-states">
        <li
          className={`todo-state ${selectedState === "all" ? "selected" : ""}`}
          onClick={handleStateChange}
          value="all"
          key="all"
        >
          All
        </li>
        <li
          className={`todo-state ${
            selectedState === "active" ? "selected" : ""
          }`}
          onClick={handleStateChange}
          value="active"
          key="active"
        >
          Active
        </li>
        <li
          className={`todo-state ${
            selectedState === "completed" ? "selected" : ""
          }`}
          onClick={handleStateChange}
          value="completed"
          key="completed"
        >
          Completed
        </li>
      </ul>
      <button id="btn-clear-completed" onClick={handleClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoFooter;
