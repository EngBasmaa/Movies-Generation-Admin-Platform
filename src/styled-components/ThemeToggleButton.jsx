import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "light" ? (
        <i
          onClick={toggleTheme}
          className="bi fs-5 bi-moon-fill mx-3"
          style={{ cursor: "pointer" }}
        ></i>
      ) : (
        <i
          onClick={toggleTheme}
          className="bi fs-5 bi-sun-fill mx-3"
          style={{ cursor: "pointer" }}
        ></i>
      )}
    </>
  );
}
