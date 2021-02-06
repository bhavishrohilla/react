import React, { Component } from 'react'

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
        console.log('componentDidMount')
    }
    
    render() {
        console.log('render')
        return (
            <div>
                LifeCycleA
            </div>
        )
    }
}

export default LifeCycleA
