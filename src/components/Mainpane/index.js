
import React, { Component } from 'react';

import './style.css';


class Mainpane extends Component {
    render() {
        return (
            <div className="main-pane scroll-v">
                {this.props.children}
            </div>
        )
    }
}

export default Mainpane;
