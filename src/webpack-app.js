

import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './components/AppRouter'

// const information = {
//     anthonylee: 'password',
//     johnsmith: 'smith123',
//     correct: true
// }

// function onFormSubmit(e) {
//     e.preventDefault()
    
//     const password = e.target.elements.password.value
//     const username = e.target.elements.username.value

//     if (information[username] === password){
//         information.correct = true
//         window.location.href ='../feed.html'
//     } else {
//         information.correct = false
//         renderInstagram()
//         return false
//     }
// }


// function renderInstagram(){
//     const form = (
//         <div id='user-form'>
        // <form onSubmit={onFormSubmit}>
        //     <div id='username-div'>
        //         <label>Username: </label>
        //         <input type='text' name='username' id='username' />
        //     </div>
        //     <div id='password-div'>
        //         <label>Password: </label>
        //         <input type='password' name='password' id='password' />
        //     </div>
        //     <button type='submit'>Login</button>
        //     <p>{!information.correct && 'You have submitted the wrong information'}</p>
        // </form>
//     </div>
//     )

//     ReactDOM.render(form , document.getElementById('app'))
// }

// function renderInstagramFeed(){

// }

// renderInstagram()

// class Instagram extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userInformation: ['anthonylee', 'password'],
//             status: true
//         }
//         this.onFormSubmit = this.onFormSubmit.bind(this)
//     }

//     onFormSubmit (e){
//         e.preventDefault()
//         const password = e.target.elements.password.value
//         const username = e.target.elements.username.value

//         if (this.state.userInformation[0] === username && this.state.userInformation[1] === password){
//             window.location.href ='../feed.html'
//         } else {
//             console.log('false')
//             this.setState(() => ({
//                 status: false
//             }))
//         }
//         // this.state.userInformation.forEach((info) => {
//         //     if (info[0] === username && info[1] === password){
//         //         window.location.href ='../feed.html'
//         //     } else {
//         //         this.setState(() => ({
//         //             status: false
//         //         }))
//         //     }
//         // })
//     }

//     render(){
//         return (
//             <div>
//                 <Form 
//                 onFormSubmit={this.onFormSubmit}
//                 status={this.state.status}
//                  />
//             </div>
//         )
//     }

// }

// const Form = (props) => {
//     return (
//         <form onSubmit={props.onFormSubmit}>
//             <div id='username-div'>
//                 <label>Username: </label>
//                 <input type='text' name='username' id='username' />
//             </div>
//             <div id='password-div'>
//                 <label>Password: </label>
//                 <input type='password' name='password' id='password' />
//             </div>
//             <button type='submit'>Login</button>
//             {!props.status && <p>You have entered a wrong username/password! Please try again!</p>}
//         </form>
//     )
// }

ReactDOM.render(<AppRouter />,document.getElementById('app'))