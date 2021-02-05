import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments : '',
             topic : '---'
        }
    }
    //when you assign a handler onChange event, the event itself is passed to the parameter to the handler
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = event => {
        this.setState({
            topic : event.target.value
        })
    }
    handleSubmit = event => {
        alert(`username=${this.state.username} \ncomment=${this.state.comments} \ntopic=${this.state.topic}`)
        // \n for changing line in alert messege
    //as on dismissing the alert we lose the data filled in the form, so to prevent that
        event.preventDefault()
    //this will prevent the default behaviour of form submission
    }

    render() {
        const {username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                    <option value="none">---</option>
                        <option value="react">React</option>
                        <option value="android">Android</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
