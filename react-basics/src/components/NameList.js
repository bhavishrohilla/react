import React from 'react'

function NameList() {
    const name = ['Bruce', 'Clark', 'Diana']
    return (
        <div>
            <h1>{name[0]}</h1>
            <h1>{name[1]}</h1>
            <h1>{name[2]}</h1>
        </div>
    )
}

export default NameList