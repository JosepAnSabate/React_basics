import React, {useState} from "react"

function Form(){
    const [count, setCount] = useState(0)
    
    function addNumber(){
        setCount(prevCount => prevCount + 1)
    }
    function substractNumber(){
        setCount(prevCount => prevCount - 1)
    }
    
    return(
        <>
        <button onClick={substractNumber}>-</button>
        <span>{count}</span>
        <button onClick={addNumber}>+</button>
        </>
    )
}

export default Form;