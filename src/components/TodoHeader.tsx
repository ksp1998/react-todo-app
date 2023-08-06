import { useEffect, useState } from "react";

const TodoHeader = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ?? ""
  );

  useEffect(() => {
    const rootVars = document.documentElement.style;
    let themeIcon, fontColor, primaryColor, secondaryColor, backgroundImage;
    if (theme === "dark") {
      themeIcon = "url('/images/icon-sun.svg')";
      fontColor = "hsl(236, 33%, 92%)";
      primaryColor = "hsl(235, 21%, 11%)";
      secondaryColor = "hsl(235, 24%, 19%)";
      backgroundImage = "url('/images/bg-desktop-dark.jpg')";
    } else {
      themeIcon = "url('/images/icon-moon.svg')";
      fontColor = "hsl(235, 21%, 11%)";
      primaryColor = "hsl(0, 0%, 98%)";
      secondaryColor = "hsl(236, 33%, 92%)";
      backgroundImage = "url('/images/bg-desktop-light.jpg')";
    }

    rootVars.setProperty("--theme-icon", themeIcon);
    rootVars.setProperty("--font-color", fontColor);
    rootVars.setProperty("--primary-color", primaryColor);
    rootVars.setProperty("--secondary-color", secondaryColor);
    rootVars.setProperty("--background-image", backgroundImage);

    localStorage.setItem("theme", String(theme));
  }, [theme]);

  return (
    <div className="todo-header">
      <div className="logo-title-container">
        <img className="todo-logo" src="images/todo-logo.png" alt="Todo App" />
        <h1>Todo App</h1>
      </div>
      <span
        id="btn-theme"
        className="todo-btn"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      ></span>
    </div>
  );
};

export default TodoHeader;
