"use client"

import { useEffect } from "react"

export function CountAndButton() {

  useEffect(() => {
    console.log("Mounted");
  }, []);
  return (
      <p>useEffect</p>
  )
}