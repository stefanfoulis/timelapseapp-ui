import React, { Component } from 'react';

import './style.css';


class SecondaryMenu extends Component {
    render() {
        return (
            <aside className="sidebar">
                {this.props.children}
            </aside>
        )
    }
}

export default SecondaryMenu;
