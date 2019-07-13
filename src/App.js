import React, {Component} from 'react'
import TableView from './views/TableView';
import MapView from './views/MapView';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import './index.css'


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="" component={TableView} />
          {/* <Redirect exact={true} from='*' to='/table' /> */}

        </Switch>
      </Router>
    )
  }
}

export default App