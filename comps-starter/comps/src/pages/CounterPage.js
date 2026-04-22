import { useState, useEffect } from "react";
import Button from "../components/Button";

function useSomething(initialCount) {
    const [count, setCount] = useState(initialCount)

    useEffect(() => {
        console.log(count)
    }, [count])

    const increment = () => {
        setCount(count + 1);
    }

    return {
        count,
        increment
    }
}



function CounterPage({initialCount}) {
    const {count, increment}  = useSomething(initialCount);

    return <div> 
        <h1>Count is {count} </h1>
        <button onClick={increment}>
            Increment
        </button>
    </div>
}


export default CounterPage