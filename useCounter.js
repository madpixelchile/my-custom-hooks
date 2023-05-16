import { useState } from "react"

export const useCounter = (initialCount=10) => {

    const [counter, setCounter] = useState(initialCount);

    return {
        next: (value = 1)=> setCounter((currentCounter)=> currentCounter + value),
        prev: (value = 1)=> setCounter((counter < 2) ? 1 : (currentCounter)=> currentCounter - value),
        reset: ()=> setCounter(initialCount),
        counter,
    }
}

