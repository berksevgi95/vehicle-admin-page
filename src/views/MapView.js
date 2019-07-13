import React, { Component } from 'react';
import { Button, Header, Image, Modal, Input, Select, Icon, Popup, Menu, Dropdown } from 'semantic-ui-react'
import L from 'leaflet'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addVehicle, changeRouteFilter, changeFilterDate, changeVehicleFilter } from '../actions';

class MapView extends Component {

    constructor(props) {

        super(props);
        this.state = {
            map: null,
            layerGroup: null,
            width: 0,
            height: 0,
            filterObj: {
                date: '',
                vehicle: '',
                routes: ''
            }
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.truckIcon = L.icon({
            iconUrl: process.env.PUBLIC_URL + "/assets/icons/truck.png",

            iconSize: [30, 35], // size of the icon
            iconAnchor: [30, 35], // point of the icon which will correspond to marker's location
            popupAnchor: [30, 35] // point from which the popup should open relative to the iconAnchor
        });
    }

    componentWillMount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleAddVehicle = (lat, lng) => {
        this.props.addVehicle && this.props.addVehicle(lat, lng)
    }

    componentDidMount() {

        const self = this;
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        const map = L.map('mapid').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            id: 'mapbox.streets',
            zoomControl: false,
        }).addTo(map);

        map.doubleClickZoom.disable();
        map.zoomControl.setPosition('topright')
        map.on('dblclick', (e) => {
            const coord = e.latlng;
            const lat = coord.lat;
            const lng = coord.lng;
            self.handleAddVehicle(lat, lng)
        });

        const layerGroup = L.layerGroup().addTo(map)

        this.setState({ map, layerGroup })

    }

    componentDidUpdate() {
        const { vehicles, routes } = this.props
        const { map, filterObj } = this.state

        this.state.layerGroup.clearLayers()

        vehicles
            .filter(v => !v.vehicleFilter ? v : v.vehicleFilter === v.id )
            .forEach(vehicle => {
                this.state.layerGroup.addLayer(
                    L.marker([vehicle.coord && vehicle.coord.lat, vehicle.coord && vehicle.coord.lng], { icon: this.truckIcon })
                ).addTo(map).bindPopup(vehicle.name)
            })
            
        routes
            .filter(r => !r.routeFilter ? r : r.routeFilter === r.id )
            .filter(r => !r.filterDate ? r : new Date(r.date) < new Date(r.filterDate) )
            .forEach(route => {
                this.state.layerGroup.addLayer(
                    L.marker([route.deptLoc && route.deptLoc.lat, route.deptLoc && route.deptLoc.lng])
                ).addLayer(
                    L.marker([route.arrLoc && route.arrLoc.lat, route.arrLoc && route.arrLoc.lng])
                ).addTo(map).bindPopup(route.name)
            })
    }

    getMapOfAllVehicles = () => {
        const { vehicles } = this.props
        return vehicles && vehicles.map(vehicle => ({
            key: vehicle.id,
            value: vehicle.id,
            text: vehicle.name
        }))
    }

    getMapOfAllRoutes = () => {
        const { routes } = this.props
        return routes && routes.map(route => ({
            key: route.id,
            value: route.id,
            text: route.name
        }))
    }

    handleRedirectMainPage = (e) => {
        this.props.history.push('/')
    }

    handleChangeField = (bindAtts, e, { name, value }) => {
        if (value) {
            this.setState({
                filterObj: {
                    ...this.state.filterObj,
                    [bindAtts]: value
                }
            })
        }
        else {
            let filterObj = this.state.filterObj
            delete filterObj[bindAtts];
            this.setState({
                filterObj
            })
        }
    }

    handleSubmitFilter = () => {
        const {
            date,
            vehicle,
            routes
        } = this.state.filterObj

        const {
            changeFilterDate,
            changeRouteFilter,
            changeVehicleFilter
        } = this.props

        changeFilterDate(date)
        changeVehicleFilter(vehicle)
        changeRouteFilter(routes)
    }

    render() {
        const { filterObj } = this.state
        return (
            <Modal size={"fullscreen"} open>
                <Modal.Header className="space-between">
                    <span>Map View</span>
                    <Icon className="space-between" onClick={this.handleRedirectMainPage} name="close" />
                </Modal.Header>
                <Modal.Content className="map-modal-content">
                    <div style={{ height: this.state.height - 200 }} id="mapid"></div>
                    <div className="map-toolbar">
                        <Input
                            className="el"
                            name="date"
                            type="date"
                            placeholder="Date"
                            onChange={this.handleChangeField.bind(this, 'date')}
                        />
                        <Dropdown
                            className="el"
                            clearable
                            options={this.getMapOfAllVehicles()}
                            selection
                            onChange={this.handleChangeField.bind(this, 'vehicle')}
                            placeholder='All Vehicles'
                        />
                        <Dropdown
                            className="el"
                            clearable
                            options={this.getMapOfAllRoutes()}
                            selection
                            onChange={this.handleChangeField.bind(this, 'routes')}
                            placeholder='All Routes'
                        />

                        <Button
                            className="el"
                            onClick={this.handleSubmitFilter}
                            icon
                        >
                            <Icon name="angle right" />
                        </Button>
                    </div>

                </Modal.Content>
            </Modal>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        vehicles: state.vehicles,
        routes: state.routes
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addVehicle: (lat, lng) => {
            dispatch(addVehicle(lat, lng))
        },
        changeFilterDate : (date) => {
            dispatch(changeFilterDate(date))
        },
        changeRouteFilter : (route) => {
            dispatch(changeRouteFilter(route))
        },
        changeVehicleFilter : (vehicle) => {
            dispatch(changeVehicleFilter(vehicle))
        }
    }
}


export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MapView)
)