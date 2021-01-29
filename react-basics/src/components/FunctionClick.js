import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Button Clicked")
    }
    //event handler is a function and not a function call.
    return (
        <div>
            <button onClick={clickHandler}>Click</button>  
        </div>
    )
}

export default FunctionClick