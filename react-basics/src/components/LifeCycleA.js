import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vishwaas'
        }
        console.log('LifeCycle A constructed')
    }
    static getDerivedStateFromProps() {
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    
    render() {
        console.log('render')
        return (
            <div>
                LifeCycleA
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
