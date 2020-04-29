import { BrowserRouter, Route, Switch, Link,NavLink } from 'react-router-dom';
import React from 'react';
import Instagram from './Instagram';
import MyFeed from './InstagramFeed';


// Routes the Home Page to the Feed Page
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/' component={Instagram} exact={true}/>
                <Route path='/MyFeed' component={MyFeed} />
            </Switch>
        </div>
            

        </BrowserRouter>
)

export default AppRouter;