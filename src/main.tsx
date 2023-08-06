import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import TodosState from "./context/todos/TodosState.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosState>
        <App />
      </TodosState>
    </BrowserRouter>
  </React.StrictMode>
);
