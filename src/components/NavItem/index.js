import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class NavItem extends Component {
    render () {
        const children = this.props.children;
        return (
            <Route path={this.props.to} children={({match}) => (
                <li className={`nav-item${match ? ' active' : ''}`}>
                    {children}
                </li>
            )} />
        )
    }
}

export default NavItem;
