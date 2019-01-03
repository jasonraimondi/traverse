import { remote } from 'electron';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

class About extends React.Component {
    render() {
        return <div>I am an about component, {remote.app.getVersion()}</div>;
    }
}

export default withRouter(About);
