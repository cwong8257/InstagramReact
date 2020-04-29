import React from 'react';
import ReactDOM from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';




class InstagramFeedItem extends React.Component {
    constructor(props) {
        super(props);

        // state
        // Comment is to hold comments for each instagramFeedItem
        // Error is to determine whether the image has resulted in an error or not

        this.state = {
            comment: [],
            error: false
        }
        this.addComment = this.addComment.bind(this)
        this.likeComment = this.likeComment.bind(this)
        this.error = this.error.bind(this)
    }


    addComment(e) {
        e.preventDefault()
        const value = e.target.elements.comments.value
        console.log(value)
        this.setState((prevState) => ({
            comment: prevState.comment.concat([value])
        }))
    }

    likeComment() {
        console.log('you have liked the picture')
        const heart = document.getElementById(this.props.imageItem)
        if (heart.style.color === 'red'){
            heart.style.color = 'black'
        } else {
            heart.style.color = 'red'
        }
    }

    error(){
        this.setState(() => ({
            error: true
        }))
    }

    render (){ 
        if (this.state.error){return null}
        else {
        return (
            <div id='content'>
                <img src={this.props.imageItem} onDoubleClick={this.likeComment} onError={this.error} ></img>
                {this.state.comment.map((text) => {
                    return <p key={text} >{text}</p>
                })}
                
                
                <form onSubmit={this.addComment}> 
                    <input type='text' name='comments' id='comment' />
                    <input type='submit' name='comment' id='comment' />
                </form>
                <FontAwesomeIcon id={this.props.imageItem} icon={faHeart} />
            </div>
    )}}
}

export default InstagramFeedItem