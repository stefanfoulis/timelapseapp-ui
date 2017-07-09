import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import PrimaryMenu from '../PrimaryMenu';
import Cameras from '../Cameras';
import NotFound from '../NotFound';
import SecondaryMenu from '../SecondaryMenu';


class App extends Component {
    render() {
        return (
            <Router>
                <div id="app">
                    <PrimaryMenu />
                    <Switch>
                        <Route exact path="/" render={() => (
                            <div>
                                <SecondaryMenu />
                                <div className="main-pane">
                                    <header className="main-pane-header">
                                        <h1>Welcome</h1>
                                    </header>
                                </div>
                            </div>
                        )} />
                        <Route path="/cameras/" component={Cameras} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
