import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {routes} from './routes';
import {applyRouterMiddleware, Router} from 'react-router';
import {useScroll} from 'react-router-scroll'


class Root extends Component {

    render() {
        return (
            <Provider store={this.props.store}>
                <Router
                    history={this.props.history}
                    routes={routes}
                    render={applyRouterMiddleware(useScroll())}
                />
            </Provider>
        )
    }
}

Root.propTypes = {
    history : React.PropTypes.object.isRequired,
    store : React.PropTypes.object.isRequired
};

export default Root;