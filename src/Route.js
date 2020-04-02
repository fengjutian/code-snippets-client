import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import App from './App.js';
import Main from './views/main/Main.js'

const BasicRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/main" component={Main}/>
            </Switch>
        </Router>
    )
}

export default BasicRoute