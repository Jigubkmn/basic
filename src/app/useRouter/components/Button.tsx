"use client"

import { useRouter } from "next/navigation";

export function Button() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/useState" , {scroll: false})
  }

  return (
      <button onClick={handleClick}>useState</button>
  )
}