import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
        id : 1,
        name : 'Bruce',
        age : '21',
        skills : 'Python'
        },
        {
            id : 2,
            name : 'Clark',
            age : '22',
            skills : 'Javascript'
        },
        {
            id : 3,
            name : 'Diana',
            age : '20',
            skills : 'Data Science'
        }
    ]
    const names = ['Bruce', 'Clark', 'Diana', 'Clark']
    // key is only for element stability. here index is used as key as index of every element is unique so we have to 
    //     pass 2nd parameter as index in arrow function.
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    
    return <div>{nameList}</div>
}

export default NameList