import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider(props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme in local storage
  };

  useEffect(() => {
    // Apply the theme to the body element
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  const data = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={data}>{props.children}</ThemeContext.Provider>
  );
}
