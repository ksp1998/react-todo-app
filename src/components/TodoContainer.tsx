import { MouseEvent } from "react";
import TodoItem from "./TodoItem";
import { todoItem } from "./helper/helper";

interface Props {
  todoItems: todoItem[];
  setTodoItems: (todoItems: todoItem[]) => void;
  selectedState: string;
}

const TodoContainer = ({ todoItems, setTodoItems, selectedState }: Props) => {
  const handleTodoState = (label: MouseEvent<HTMLInputElement>) => {
    let todoID = label.target?.attributes["todo-id"]?.value;
    if (!todoID) {
      todoID = label.target.parentElement?.attributes["todo-id"]?.value;
    }
    if (!todoID) {
      return;
    }

    const items = todoItems.map((todoItem: todoItem) => {
      if (todoID == todoItem.id) {
        todoItem.state = Number(!todoItem.state);
      }
      return todoItem;
    });
    setTodoItems(items);
  };

  const handleRemoveTodo = (btn: MouseEvent<HTMLButtonElement>) => {
    const todoID = btn.target?.attributes["todo-id"]?.value;
    setTodoItems(
      todoItems.filter((todoItem: todoItem) => todoID != todoItem.id)
    );
  };

  return (
    <div className="todo-container">
      <ul className="todo-items">
        {todoItems
          .filter((todoItem: todoItem) => {
            if (selectedState === "active") {
              return todoItem.state === 0;
            }
            if (selectedState === "completed") {
              return todoItem.state === 1;
            }
            return true;
          })
          .map((todoItem: todoItem) => {
            return (
              <TodoItem
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
