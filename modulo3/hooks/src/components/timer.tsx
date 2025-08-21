import { useState, useEffect } from "react";

export default function Timer() {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        document.title = `${count}`
    }, [count])

    function handleIncrement() {
        setCount(count + 1)
    }

        function handleDecrement() {
        setCount(count - 1)
    }

        function handleReset() {
        setCount(0)
    }

    return (
        <>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>0</button>
        </>
    )
}