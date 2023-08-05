import { MouseEvent } from "react";
import { todoItem } from "./helper/helper";

interface Props {
  todoItem: todoItem;
  handleTodoState: (label: MouseEvent<HTMLLabelElement>) => void;
  handleRemoveTodo: (btn: MouseEvent<HTMLButtonElement>) => void;
}

const TodoItem = ({ todoItem, handleTodoState, handleRemoveTodo }: Props) => {
  return (
    <li
      className={`todo-item ${todoItem.state === 1 ? "completed" : ""}`}>
      <label data-todoid={todoItem.id} onClick={handleTodoState}>
        <span className="btn-checkbox"></span>
        <span
          className="todo-text"
        >
          {todoItem.name}
        </span>
      </label>
      <span
        id="btn-delete-todo"
        className="todo-btn"
        data-todoid={todoItem.id}
        onClick={handleRemoveTodo}
      ></span>
    </li>
  );
};

export default TodoItem;
