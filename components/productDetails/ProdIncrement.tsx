'use client'

import { useState } from "react"

function ProdIncrement() {
    const [count, setCount] = useState<number>(1)

    const handleIncrement = () => {
        if (count < 10) {
            setCount(count + 1)
        }

    }

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

  return (
    <div className="flex rounded-3xl bg-zinc-100 border-2 border-zinc-200">
        <div className="px-4 py-2 border-r-1 border-zinc-400 w-1/3 text-2xl" onClick={handleDecrement}>-</div>
        <div className="px-4 py-2 border-r-1 border-zinc-400 w-1/3 text-2xl" >{count}</div>
        <div className="px-4 py-2 w-1/3 text-2xl" onClick={handleIncrement}>+</div>
    </div>
  )
}

export default ProdIncrement