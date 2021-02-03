import React from 'react'
import ClassClick from './ClassClick'
import './Mystyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div> 
            <h2 className={`${className} font-xl`}>StyleSheet</h2>
        </div>
    )
}

export default Stylesheet