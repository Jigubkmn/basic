"use client"

import { useState } from "react"

export function CountAndButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(prev => prev + 1);
  }

  return (
    <>
      <p>Count:{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}