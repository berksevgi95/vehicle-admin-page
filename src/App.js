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

import './index.css'


class App extends Component {

  render() {
    
    const {
      layout
    } = this.props
    
    return (
      <Router>
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
  return { ...state }
}

export default connect(
  mapStateToProps,
  undefined
)(App)