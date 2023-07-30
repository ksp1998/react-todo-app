import { ChangeEvent, FormEvent, useState } from "react";
import { todoItem } from "./helper/helper";

interface Props {
  todoItems: todoItem[];
  setTodoItems: (todoItems: todoItem[]) => void;
}

const NewTodo = ({ todoItems, setTodoItems }: Props) => {
  const [todoInput, setTodoInput] = useState<string>("");

  const handleSubmit = (form: FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    if (!todoInput) {
      return;
    }

    const items = [
      {
        id: new Date().getTime(),
        name: todoInput,
        state: 0,
      },
      ...todoItems,
    ];
    setTodoItems(items);
    setTodoInput("");
  };

  const handleOnChange = (input: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(input.target.value);
  };

  return (
    <form className="new-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo"
        placeholder="Create new todo..."
        value={todoInput}
        onChange={handleOnChange}
      />
      <button id="btn-add-todo" className="todo-btn"></button>
    </form>
  );
};

export default NewTodo;
