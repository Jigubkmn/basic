"use client"

import { useRouter } from "next/navigation";

type Props = {
  page: string;
}

export function Button({page}: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${page}` , {scroll: false})
  }

  return (
      <button onClick={handleClick}>{page}</button>
  )
}