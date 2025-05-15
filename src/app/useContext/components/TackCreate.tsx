"use client"

import { createContext, useState } from "react";
import { TaskList } from "./TaskList";

export const ThemeContext = createContext<string | null>(null);

export function TackCreate() {
  const [theme, setTheme] = useState("black");


  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "black" ? "white" : "black"))
  };

  return(
    <div>
      <div>
        <ThemeContext.Provider value={theme}>
          <div>
            <button onClick={toggleTheme}>テーマを切り変える</button>
            <TaskList />
          </div>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}