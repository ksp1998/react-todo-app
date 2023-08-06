import { useContext } from "react";
import todosContext, { Todo } from "../context/todos/todosContext";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { toggleTodoState, removeTodo } = useContext(todosContext);

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label onClick={() => toggleTodoState && toggleTodoState(todo.id)}>
        <span className="btn-checkbox"></span>
        <span className="todo-text">{todo.name}</span>
      </label>
      <span
        id="btn-delete-todo"
        className="todo-btn"
        onClick={() => removeTodo && removeTodo(todo.id)}
      ></span>
    </li>
  );
};

export default TodoItem;
