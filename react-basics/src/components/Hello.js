import React from 'react'


const Hello = () => {
    // return(
    //     <div className= 'dummyClass>
    //         <h1>Hello Aliens</h1>
    //     </div>
    // )

    return React.createElement("div", 
    {id: 'Hello', className: 'dummyClass'}, 
    React.createElement("h1",null,"Greeting Aliens"))
}

export default Hello