import { FormEvent, useContext, useState } from "react";
import todosContext, { Todo } from "../context/todos/todosContext";
const NewTodo = () => {
  const [todo, setTodo] = useState<string>("");

  const { addTodo } = useContext(todosContext);

  const handleFormSubmit = (form: FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    if (!todo) {
      // Show eeror if required
      return;
    }

    const newTodo: Todo = {
      id: new Date().getTime(),
      name: todo,
      completed: false,
      createdAt: new Date(),
    };

    addTodo && addTodo(newTodo);
    setTodo("");
  };

  return (
    <form className="new-todo" onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="new-todo"
        placeholder="Create new todo..."
        value={todo}
        onChange={(input) => setTodo(input.target.value)}
      />
      <button id="btn-add-todo" className="todo-btn"></button>
    </form>
  );
};

export default NewTodo;
