import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, BrowserRouter, Route, Switch, Link,NavLink } from 'react-router-dom';
import InstagramFeed from './InstagramFeed'; 

export default class Instagram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInformation: ['anthonylee', 'password'],
            status: true,
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit (e){
        e.preventDefault()
        const password = e.target.elements.password.value
        const username = e.target.elements.username.value

        if (this.state.userInformation[0] === username && this.state.userInformation[1] === password){
            this.props.history.push('/MyFeed')
        } else {
            console.log('false')
            this.setState(() => ({
                status: false
            }))
        } 
    }

    render(){
        return (
            <div>
                <Form 
                onFormSubmit={this.onFormSubmit}
                status={this.state.status}
                 />
            </div>
        )
    }

}

const Form = (props) => {
    return (
        <div id='user-form'>
            <h1>Instagram</h1>
            <form id='myForm' onSubmit={props.onFormSubmit}>
                <div id='username-div'>
                    <label>Username: </label>
                    <input type='text' name='username' id='username' />
                </div>
                <div id='password-div'>
                    <label>Password: </label>
                    <input type='password' name='password' id='password' />
                </div>
                <button type='submit'>Login</button>
                {!props.status && <p id='bad-password'>You have entered a wrong username/password! Please try again!</p>}
            </form>
        </div>
    )
}