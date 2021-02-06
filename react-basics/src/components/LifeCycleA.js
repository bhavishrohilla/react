import React, { Component } from 'react'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vishwaas'
        }
        console.log('LifeCycle A constructed')
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleA
