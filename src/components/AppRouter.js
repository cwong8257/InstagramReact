import { BrowserRouter, Route, Switch, Link,NavLink } from 'react-router-dom';
import React from 'react';
import Instagram from './Instagram';
// import InstagramFeed from './InstagramFeed';
import MyFeed from './InstagramFeed';

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