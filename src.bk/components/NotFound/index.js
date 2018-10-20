import React, { Component } from 'react';
import SecondaryMenu from '../SecondaryMenu';

import './style.css';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <SecondaryMenu />
                <div className="main-pane">
                    <header className="main-pane-header">
                        <h1>Page not found</h1>
                    </header>
                    <p>Please make sure the address is correct.</p>
                </div>
            </div>
        );
    }
}
