import React from 'react'

import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import HomeView from "../views/home/HomeView";
import VehiclesView from "../views/vehicles/VehiclesView";
import VehiclesDetailView from "../views/vehicles/detail/VehiclesDetailView";
import SettingsView from "../views/settings/SettingsView";

export default [{
        path: "/home",
        component: HomeView,
    }, {
        path: "/vehicles",
        component: VehiclesView,
        exact : true,
        icon: <Link to={"/vehicles"} >
            <Icon name='home' />
            Vehicles
        </Link>
    }, {
        path: "/vehicles/detail",
        component: VehiclesDetailView,
    }, {
        path: "/settings",
        component: SettingsView,
        icon: <Link to={"/settings"} >
            <Icon name='settings' />
            Settings
        </Link>
    }
];