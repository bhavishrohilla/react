import React, { Component } from 'react'


class Message extends Component{
    constructor() {
        super()
        this.state = {
            messege : "Welcome Visitor"
        }
    }

changeMessege(){
    this.setState({
        messege : "Thank You for Subscribing."
    })
}
    render() {
        return(
            <div>
                <h1>{ this.state.messege }</h1>
                <button onClick={() => this.changeMessege()}>Subscribe</button>
            </div>
        )
    }
}

export default Message