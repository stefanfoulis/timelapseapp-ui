import React, {Component} from 'react';
import {
    createFragmentContainer,
    graphql,
} from 'react-relay';
import {
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import NavItem from '../NavItem';


class CameraOverview extends Component {
    render() {
        const camera = this.props.camera;
        return (
            <section className="card-block">
                <p className="card-text">
                    <dl>
                        <dt>Id</dt>
                        <dd>{camera.id}</dd>

                        <dt>Name</dt>
                        <dd>{camera.name}</dd>

                        <dt>Notes</dt>
                        <dd>{camera.notes}</dd>
                    </dl>
                </p>
            </section>
        );
    }
}


class CameraDetails extends Component {
    render() {
        let camera = this.props.camera;
        return (
            <section className="main-pane">
                <header className="main-pane-header">
                    <h1>{camera.name}</h1>
                </header>
                <div className="card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <NavItem to={`/cameras/${camera.id}/overview/`}>
                                <NavLink to={`/cameras/${camera.id}/overview/`} className="nav-link">Overview</NavLink>
                            </NavItem>
                        </ul>
                    </div>
                    <Switch>
                        <Route path="/cameras/:cameraId/overview/" render={() =>
                            <CameraOverview camera={camera} />
                        } />
                    </Switch>
                </div>
            </section>
        );
    }
}


export default createFragmentContainer(CameraDetails, graphql`
    fragment CameraDetails_camera on CameraNode {
        id
        name
        notes
    }
`);
