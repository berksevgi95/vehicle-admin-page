import HomeView from "../views/home/HomeView";
import VehiclesView from "../views/vehicles/VehiclesView";
import VehiclesDetailView from "../views/vehicles/detail/VehiclesDetailView";

export default [{
        path: "/home",
        component: HomeView,
    }, {
        path: "/vehicles",
        component: VehiclesView,
        exact : true
    }, {
        path: "/vehicles/detail",
        component: VehiclesDetailView
    }
];