import React, {Component} from 'react'
import routes from './configs/routes';
import layouts from './configs/layouts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './index.css'


class App extends Component {

  render() {
    return (
      <Router>
        {layouts["layout1"](
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

export default App