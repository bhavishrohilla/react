import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vishwaas'
        }
        console.log('LifeCycle B constructed')
    }
    static getDerivedStateFromProps() {
        console.log('Lifecycle B getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    
    render() {
        console.log('render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
