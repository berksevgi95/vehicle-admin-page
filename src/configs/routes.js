import React from 'react'

import { Icon } from 'semantic-ui-react'

import HomeView from "../views/home/HomeView";
import VehiclesView from "../views/vehicles/VehiclesView";
import VehiclesDetailView from "../views/vehicles/detail/VehiclesDetailView";
import SettingsView from "../views/settings/SettingsView";
import SearchView from '../views/search/SearchView';
import SearchDetailView from '../views/search/detail/SearchDetailView';
import AccidentsView from '../views/accidents/AccidentsView';
import AccidentsDetailView from '../views/accidents/detail/AccidentsDetailView';
// import InsurancesView from '../views/insurances/InsurancesView';

export default [{
        id : 1,
        path: "/home",
        component: HomeView,
    }, {
        id : 2,
        path: "/vehicles",
        component: VehiclesView,
        exact : true,
        icon: <Icon name='car' className="m-icon" />,
        title: 'vehicles'
    }, {
        id : 3,
        path: "/vehicles/:id",
        component: VehiclesDetailView,
    }, {
        id : 4,
        path: "/settings",
        component: SettingsView,
        icon: <Icon name='settings' className="m-icon" />,
        title: 'settings'
    }, {
        id : 5,
        path: "/search",
        exact : true,
        component: SearchView
    }, {
        id : 6,
        path: "/search/:searchText",
        component: SearchDetailView
    }, {
        id : 7,
        exact : true,
        path: "/accidents",
        component: AccidentsView,
        icon: <Icon name='unlink' className="m-icon" />,
        title: 'accidents'
    }, {
        id : 8,
        path: "/accidents/:id",
        component: AccidentsDetailView,
    }, /* {
        id : 9,
        exact : true,
        path: "/insurances",
        component: InsurancesView,
        icon: <Icon name='file alternate outline' className="m-icon" />,
        title: 'Insurances'
    }, {
        id : 10,
        path: "/insurances/:id",
        component: AccidentsDetailView,
    } */
];