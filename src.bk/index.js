import React from 'react';
import ReactDOM from 'react-dom';

import environment from './Environment';

import App from './components/App';
import './index.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <App environment={environment}/>,
    document.getElementById('root'),
);
