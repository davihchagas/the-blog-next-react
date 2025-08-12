'use client';
import clsx from "clsx";

export function Header() {
  return (<h1 onClick={()=>alert('Oi')}
        className={clsx(
          "text-xl",
          "font-bold",
          "text-blue-200",
          "hover:text-blue-600",
          "hover:bg-amber-50",
          "transition",
          "duration-300"
        )}
      >
        Texto
      </h1>)
}
