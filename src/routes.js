import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewSpot from './pages/NewSpot';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboards" component={Dashboard}/>
                <Route path="/new" component={NewSpot}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;