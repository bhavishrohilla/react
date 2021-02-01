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
    const personList = persons.map(person => <Person person={person} />)
    
    return (
        <div>{personList}</div>
    )
}

export default NameList