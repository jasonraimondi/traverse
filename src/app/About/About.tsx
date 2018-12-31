import * as React from 'react';
import { withRouter } from 'react-router-dom';

class About extends React.Component {
    render() {
        return <div>I am an about component</div>;
    }
}

export default withRouter(About);
