import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
//short circuit method
        return this.state.isLoggedIn && <div>Welcome Vishwas</div>
//ternary operator
        // return this.state.isLoggedIn ?(
        //     <div>Welcome Vishwas</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )
//alternate method(element variables)
    //     let message
    //     if (this.state.isLoggedIn) {
    //         message = <div>Welcome Vishwas</div>
    //     } else {
    //         message = <div>Welcome Guest</div>
    //     }
    // return <div>{message}</div>

//alternate method (if-else)
        // if (this.state.isLoggedIn) {
        //     return <div>Hello Vishwas</div>
        // } else{
        //     return <div>Hello Guest</div>
        // }
        // return (
        //     <div>
                
        //     </div>
        // )
    }
}
export default UserGreeting
