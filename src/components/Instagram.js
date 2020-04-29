import React from 'react';
import { USERNAME, PASSWORD } from '../constants'

export default class Instagram extends React.Component {
    constructor(props) {
        super(props);
        // userInformation is login info, for now it only stores one
        // status, when status is false, wrong password has been entered and will display an error
        this.state = {
            status: true
        }
        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit (e){
        e.preventDefault()
        console.log(USERNAME, PASSWORD)
        const username = this.usernameInput.current.value
        const password = this.passwordInput.current.value
        console.log(username, password)


        // when correct password has been entered correctly, will push user to their feed
        if (USERNAME === username && PASSWORD === password){

            this.props.history.push('/MyFeed')
        } else {
            this.setState(() => ({
                status: false
            }))
        } 
    }

    render(){
        return (
            <div className="user-form">
                <h1>Instagram</h1>
                <form className="myForm" onSubmit={this.onFormSubmit}>
                    <div className="username-div">
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" ref={this.usernameInput} className="username" />
                    </div>
                    <div className="password-div">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" ref={this.passwordInput} className="password" />
                    </div>
                    <button type="submit">Login</button>
                    {!this.state.status && <p className="bad-password">You have entered a wrong username/password! Please try again!</p>}
                </form>
            </div>
        )
    }
}
