import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
    }
// set state can have two arguements where 2nd parameter is a arrow function 
    increment(){
        this.setState({
            count : this.state.count + 5
        },() => {console.log(this.state.count)})
        
    }
    
    render() {
        return (
            <div>
                <h1>Count-{this.state.count}</h1>
                <button onClick= {() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
