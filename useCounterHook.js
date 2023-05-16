import { useState } from "react"

export const useCounterHook = () => {

    const [counter, setCounter] = useState(0);

    return {
        counter: counter,
        increment: (num)=> setCounter(counter + num ),
        decrement: ()=> setCounter(counter < 1 ? 0 : counter - 1 ),
        reset: ()=> setCounter(0)
    }
}

