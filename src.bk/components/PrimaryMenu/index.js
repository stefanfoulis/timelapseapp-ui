import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from '../NavItem';

import './style.css';

export default class PrimaryMenu extends Component {
    render () {
        return (
            <header className="navbar navbar-toggleable-md navbar-light fixed-top">
                <div className="navbar-header">
                    <NavLink to="/" className="navbar-brand">
                        Timelapse Manager
                    </NavLink>
                </div>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav">
                        <NavItem to="/cameras/">
                            <NavLink to="/cameras/" className="nav-link">Cameras</NavLink>
                        </NavItem>
                    </ul>
                </div>
            </header>
        )
    }
}
