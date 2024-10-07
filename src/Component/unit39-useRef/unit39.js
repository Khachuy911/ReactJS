import { useEffect, useRef, useState } from "react"

// useRef used to the same with global variable 

export function UseRefHook(){
    // 1. the same global variable
    // 2. store previous of state
    // 3. refferent to html tag 

    const [count, setCount] = useState(60);

    // 1
    const sheduleCountdown = useRef();
    const previousVarRef = useRef();
    const refTag = useRef();
    //

    // 2
    useEffect(()=> {
        previousVarRef.current = count
    }, [count])
    //

    const handleStart = () => {
        // 3
        refTag.current.focus()
        //
        sheduleCountdown.current = setInterval(() => {
            setCount((preValue) => preValue - 1)
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(sheduleCountdown.current)
    }
    
    console.log(count, previousVarRef.current);

    return ( 
        <div>
            <h1 ref={refTag}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <input type="text" ref={refTag}></input>
        </div>
    )
}
