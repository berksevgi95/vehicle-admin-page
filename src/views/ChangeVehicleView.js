import React, { Component } from 'react';
import { Button, Header, Image, Modal, Input, Select, Icon, Popup, Menu, Dropdown, Segment } from 'semantic-ui-react'
import L from 'leaflet'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addVehicle, changeVehicle } from '../actions';



class ChangeVehicleView extends Component {

    constructor(props) {
        super(props);
    }

    handleRedirectMainPage = (e) => {
        this.props.history.push('/')
    }

    handleOnSelectVehicle = (vehicle) => {
        const {changeVehicle, match} = this.props

        changeVehicle(match.params.routeId, vehicle)
    }


    render() {
        const {vehicles, routes, match} = this.props
        const route = routes ? routes.filter(route => route.id === parseInt(match.params.routeId))[0] : null
        return (
            <Modal open>
                <Modal.Header className="space-between">
                    {route ? <span>{route.vehicle.name} - {route.name} - {route.driver.name}</span> : 'Route Not Found'}
                    <Icon className="space-between" onClick={this.handleRedirectMainPage} name="close" />
                </Modal.Header>
                <Modal.Content>
                {
                    route && vehicles && vehicles.map(vehicle => (
                        <Segment onClick={this.handleOnSelectVehicle.bind(this, vehicle)} className="space-between">
                            <span>
                                {vehicle.name}
                            </span>
                            {
                                route.vehicle.id === vehicle.id &&
                                <Icon color='green' name='check' />
                            }
                        </Segment>
                    ))
                }

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
        changeVehicle: (routeId, vehicle) => {
            dispatch(changeVehicle(routeId, vehicle))
        }
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ChangeVehicleView)
)