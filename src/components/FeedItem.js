import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class InstagramFeedItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: [],
            error: false,
            liked: false
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
        this.setState((prevState) => ({
            liked: !prevState.liked
        }))
    }

    error(){
        this.setState(() => ({
            error: true
        }))
    }

    render (){ 
        if (this.state.error) {
            return null
        }

        const heartClass = this.state.liked ? 'red' : ''

        return (
            <div className="content">
                <img src={this.props.imageItem} onDoubleClick={this.likeComment} onError={this.error} />

                {this.state.comment.map((text) => <p key={text}>{text}</p>)}
                
                <form onSubmit={this.addComment}> 
                    <input type="text" name="comments" className="comment" />
                    <input type="submit" name="comment" className="comment" />
                </form>
                <FontAwesomeIcon className={heartClass} icon={faHeart} />
            </div>
        )
    }
}

export default InstagramFeedItem