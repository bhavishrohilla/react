import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : ''
        }
    }
    //when you assign a handler onChange event, the event itself is passed to the parameter to the handler
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input tpe="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
            </form>
        )
    }
}

export default Form
