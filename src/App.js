import React, {Component} from 'react'
import routes from './configs/routes';
import layouts from './configs/layouts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux'
import { Message } from 'bs-ui-components';

import './index.css'
import './styles.css'


class App extends Component {

  messageRef = React.createRef();

  componentDidMount() {
    //TODO:
    window.messageRef = this.messageRef.current;
  }

  render() {
    
    const {
      layout
    } = this.props
    
    return (
      <Router>
        <Message ref={this.messageRef} />
        {layouts[layout || "layout1"](
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Redirect to="/home" />}
            />
            {routes.map((route, i) => (
              <Route
                exact={route.exact}
                key={i}
                path={route.path}
                render={props => (
                  <route.component {...props} />
                )}
              />
            ))}
          </Switch>
        )}
      </Router>
      
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return { ...state.app }
}

export default connect(
  mapStateToProps,
  undefined
)(App)