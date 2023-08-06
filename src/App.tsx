import NewTodo from "./components/NewTodo";
import TodoContainer from "./components/TodoContainer";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import "./App.scss";

const App = () => {
  return (
    <div className="container app-container">
      <TodoHeader />
      <NewTodo />
      <TodoContainer />
      <TodoFooter />
    </div>
  );
};

export default App;
