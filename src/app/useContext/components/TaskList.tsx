"use client"

import styles from "../page.module.css"
import { useContext } from "react";
import { ThemeContext } from "./TackCreate"

export function TaskList() {
  const theme = useContext(ThemeContext);
  return(
    <div className={theme === "black" ? styles.black : styles.white}>
      <p>現在のテーマ{theme}</p>
    </div>
  );
}