import { MouseEvent } from "react";
import TodoItem from "./TodoItem";
import { todoItem } from "./helper/helper";
import { useSearchParams } from "react-router-dom";

interface Props {
  todoItems: todoItem[];
  setTodoItems: (todoItems: todoItem[]) => void;
}

const TodoContainer = ({ todoItems, setTodoItems }: Props) => {
  const handleTodoState = (label: MouseEvent<HTMLLabelElement>) => {
    const target: HTMLElement = label.target as HTMLElement;

    let todoID: string | undefined = target?.dataset?.todoid;
    if (!todoID) {
      todoID = target.parentElement?.dataset?.todoid;
    }
    if (!todoID) {
      return;
    }

    const items = todoItems.map((todoItem: todoItem) => {
      if (Number(todoID) == todoItem.id) {
        todoItem.state = Number(!todoItem.state);
      }
      return todoItem;
    });
    setTodoItems(items);
  };

  const handleRemoveTodo = (btn: MouseEvent<HTMLButtonElement>) => {
    const todoID: string | undefined = (btn.target as HTMLElement)?.dataset
      ?.todoid;
    setTodoItems(
      todoItems.filter((todoItem: todoItem) => Number(todoID) != todoItem.id)
    );
  };

  const [params] = useSearchParams();
  const state: string = params.get("todos") ?? "";

  return (
    <div className="todo-container">
      <ul className="todo-items">
        {todoItems
          .filter((todoItem: todoItem) => {
            if (state === "active") {
              return todoItem.state === 0;
            }
            if (state === "completed") {
              return todoItem.state === 1;
            }
            return true;
          })
          .map((todoItem: todoItem) => {
            return (
              <TodoItem
                key={todoItem.id}
                todoItem={todoItem}
                handleTodoState={handleTodoState}
                handleRemoveTodo={handleRemoveTodo}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default TodoContainer;
