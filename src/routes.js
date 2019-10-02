import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import login from './pages/login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;