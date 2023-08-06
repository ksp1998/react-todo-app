import { useContext, useState } from "react";
import todosContext, { Todo } from "../context/todos/todosContext";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { updateTodo, toggleTodoState, removeTodo } = useContext(todosContext);

  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(todo.name);

  const handleEditTodo = (id: number) => {
    setIsEditing(true);
    setTimeout(() => {
      (document.querySelector(`#id-${id}`) as HTMLElement)?.focus();
    }, 100);
  };

  const handleTodoUpdate = (id: number) => {
    if (!todoText.trim() || todoText === todo.name) {
      // Show eeror if required
      setTodoText(todo.name);
      setIsEditing(false);
      return;
    }

    const updatedTodo: Todo = {
      ...todo,
      name: todoText,
    };

    updateTodo && updateTodo(id, updatedTodo);
    setIsEditing(false);
  };

  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""} ${
        isEditing ? "editing" : ""
      }`}
    >
      <label onClick={() => toggleTodoState && toggleTodoState(todo.id)}>
        <span className="btn-checkbox"></span>
        {!isEditing && <span className="todo-text">{todo.name}</span>}
      </label>

      {isEditing && (
        <form
          onSubmit={(form) => {
            form.preventDefault();
            handleTodoUpdate(todo.id);
          }}
        >
          <input
            id={`id-${todo.id}`}
            type="text"
            className="update-todo"
            placeholder={todo.name}
            value={todoText}
            onChange={(input) => setTodoText(input.target.value)}
          />
        </form>
      )}

      <span className="spacer"></span>

      {!isEditing && (
        <span
          className="todo-btn btn-edit-todo"
          onClick={() => handleEditTodo(todo.id)}
        ></span>
      )}

      {isEditing && (
        <span
          className="todo-btn btn-update-todo"
          onClick={() => handleTodoUpdate(todo.id)}
        ></span>
      )}

      <span
        className="todo-btn btn-delete-todo"
        onClick={() => removeTodo && removeTodo(todo.id)}
      ></span>
    </li>
  );
};

export default TodoItem;
