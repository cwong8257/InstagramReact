import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, BrowserRouter, Route, Switch, Link,NavLink } from 'react-router-dom';
import InstagramFeedItem from './FeedItem';
class MyFeed extends React.Component {
    // state = {
    //     images: []
    // }

    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    
   
    async componentDidMount(){
      const response =  await fetch('https://image-server-codesmith.firebaseapp.com/images')
      const data = await response.json();
      
      
      this.setState({ images: data })
    }

    render(){
        
        return (
            <div>
                <h1>Instagram React Version</h1>
                <h1>Anthony Lee</h1>
                {this.state.images.map((image) => {
                    return <InstagramFeedItem 
                    key={image} 
                    imageItem={image}
                    />
                })}
           </div>
        )
    }
    
}



export default MyFeed
    
