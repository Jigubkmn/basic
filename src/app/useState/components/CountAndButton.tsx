"use client"

import { useState } from "react"
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


export function CountAndButton() {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  console.log("ルート名:", pathname);

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