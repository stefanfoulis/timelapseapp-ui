import React, { Component } from 'react';
import {
    QueryRenderer,
    createFragmentContainer,
    graphql,
} from 'react-relay';
import {
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import NavItem from '../NavItem';

import environment from '../../Environment';

import SecondaryMenu from '../SecondaryMenu';
import CameraDetails from '../CameraDetails';

import './style.css';


class CameraRowComponent extends Component {
    render() {
        const camera = this.props.camera;
        return (
            <tr>
                <td>
                    <NavLink exact to={camera.id + "/overview/"}>{camera.name}</NavLink>
                </td>
                <td>{camera.name}</td>
                <td>{camera.notes}</td>
            </tr>
        );
    }
}

const CameraRow = createFragmentContainer(CameraRowComponent, graphql`
    fragment Cameras_camera on CameraNode {
        id
        notes
        name
    }
`);


class CamerasTable extends Component {
    render() {
        return (
            <section className="main-pane">
                <div className="card">
                    <table className="table card-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Notes</th>
                                <th>ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.allCameras.edges.map(({node}) =>
                                <CameraRow key={node.id} camera={node} />
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

const allCamerasQuery = graphql`
    query CamerasListingQuery {
        allCameras {
            edges {
                node {
                    id
                    ...Cameras_camera
                }
            }
        }
    }
`;

const singleCameraQuery = graphql`
    query CamerasDetailQuery($cameraId: ID!) {
        camera(id: $cameraId) {
            ...CameraDetails_camera
        }
    }
`;

class Cameras extends Component {
    render() {
        return (
            <div>
                <SecondaryMenu>
                    <ul className="nav flex-column">
                        <NavItem to="/cameras/">
                            <NavLink to="/cameras/" className="nav-link">Cameras</NavLink>
                        </NavItem>
                    </ul>
                </SecondaryMenu>
                <Switch>
                    <Route path="/cameras/" exact render={() => (
                        <QueryRenderer
                            environment={environment}
                            query={allCamerasQuery}
                            render={({error, props}) => {
                                if (error) {
                                    return (
                                        <div>Error: {error.message}</div>
                                    );
                                } else if (props) {
                                    return (
                                        <CamerasTable allCameras={props.cameras} />
                                    );
                                } else {
                                    return (
                                        <div className="main-pane">
                                            Loading...
                                        </div>
                                    );
                                }
                            }}
                        />
                    )} />
                    <Route path="/cameras/:cameraId/" render={(props) => (
                        <QueryRenderer
                            environment={environment}
                            query={singleCameraQuery}
                            variables={{cameraId: props.match.params.cameraId}}
                            render={({error, props}) => {
                                if (error) {
                                    return (
                                        <div>Error: {error.message}</div>
                                    );
                                } else if (props && props.camera) {
                                    return (
                                        <CameraDetails location={this.props.location.pathname} {...props} />
                                    );
                                } else {
                                    return (
                                        <div className="main-pane">
                                            Loading...
                                        </div>
                                    );
                                }
                            }}
                        />
                    )} />
                </Switch>
            </div>
        );
    }
}


export default Cameras;
