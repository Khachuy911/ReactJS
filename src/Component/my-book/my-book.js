import { useContext, useEffect, useRef, useState } from "react"
import {BookContext} from "../../App"

export function MyBook({color, name, children}){
    const [count, setCount] = useState(0);
    const countRef = useRef(10)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(pre=> pre = 0)
        }, 1000)
    }, [])

    const handleBtn = ()=>{
        setCount((previous) => previous+=1)

        console.log(countRef.current.value);
    }

    // const handleRefBtn = ()=>{
    //     countRef.current += 1;
    // }

    const handleOnKeyDown = (value)=>{
        setCount(Number(value))
    }

    const infoBook = useContext(BookContext);
    return (
        <div>
            <h1>{count}</h1>
            {/* <h1>{countRef.current}</h1> */}
            <button onClick={handleBtn}>Plus</button>
            {/* <button onClick={handleRefBtn}>Plus use ref</button> */}

            <p>{infoBook.author}</p>
            <p>{infoBook.name}</p>
            <p>{children}</p>

            <input ref={countRef} ></input>
        </div>
    )
}