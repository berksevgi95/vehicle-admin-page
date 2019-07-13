import React, {Component} from 'react';
import Toolbar from '../components/Toolbar';
import Table from '../components/Table';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MapView from './MapView';
import AddRouteView from './AddRouteView';
import ChangeVehicleView from './ChangeVehicleView';

class TableView extends Component {

    render() {
        return (
            <div className="table-view-container">
                <Toolbar />
                <div className="overflow-y-auto mt-10">
                    <Table />
                </div>
                <Route exact path="/map" component={MapView} />
                <Route exact path="/add-route" component={AddRouteView} />
                <Route exact path="/change-vehicle/:routeId" component={ChangeVehicleView} />

            </div>
        )
    }
}

export default TableView