"use client"

import { useState } from "react"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


export function CountAndButton() {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  console.log("ルート名:", pathname);

  function handleClick() {
    setCount(prev => prev + 1);
  }

  function handleRouter() {
    router.push("/useRouter" , {scroll: false})
  }

  return (
    <>
      <button onClick={handleRouter}>useRouter</button>
      <p>Count:{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}