import React from 'react'

import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import HomeView from "../views/home/HomeView";
import VehiclesView from "../views/vehicles/VehiclesView";
import VehiclesDetailView from "../views/vehicles/detail/VehiclesDetailView";
import SettingsView from "../views/settings/SettingsView";

export default [{
        id : 1,
        path: "/home",
        component: HomeView,
    }, {
        id : 2,
        path: "/vehicles",
        component: VehiclesView,
        exact : true,
        icon: <Link to={"/vehicles"} >
            <Icon name='car' />
            Vehicles
        </Link>
    }, {
        id : 3,
        path: "/vehicles/detail",
        component: VehiclesDetailView,
    }, {
        id : 4,
        path: "/settings",
        component: SettingsView,
        icon: <Link to={"/settings"} >
            <Icon name='settings' />
            Settings
        </Link>
    }
];