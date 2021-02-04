import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : ''
        }
    }
    //when you assign a handler onChange event, the event itself is passed to the parameter to the handler
    
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input tpe="text" value={this.state.username}/>
                </div>
            </form>
        )
    }
}

export default Form
