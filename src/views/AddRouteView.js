import React, { Component } from 'react';
import { Modal, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addVehicle, addRoute } from '../actions';
import { Status } from '../@fake-db';

import { Button, Form, Input as FormikInput, Dropdown,  } from 'formik-semantic-ui';


class AddRouteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time : null
        }
    }

    handleRedirectMainPage = (e) => {
        this.props.history.push('/')
    }

    getMapOfAllVehicles = () => {
        const { vehicles } = this.props
        return vehicles && vehicles.map(vehicle => ({
            key: vehicle.id,
            value: vehicle.id,
            text: vehicle.name
        }))
    }

    getMapOfAllDrivers = () => {
        const { drivers } = this.props
        return drivers && drivers.map(driver => ({
            key: driver.id,
            value: driver.id,
            text: driver.name
        }))
    }

    handleOnChangeTime = (e, {name, value}) => {
        this.setState({
            time : value
        })
    }

    handleSubmit = (values, formikApi) => {
        const {vehicles, drivers, addRoute, history} = this.props
        const {
            name,
            vehicle,
            driver,
            deptLat,
            deptLng,
            arrLat,
            arrLng
        } = values
        const time = this.state.time

        if(name && 
            vehicle && 
            time && 
            driver && 
            deptLat &&
            deptLng &&
            arrLat &&
            arrLng) {

            const newRoute = {
                name : values.name,
                vehicle : vehicles && vehicles.filter(v => v.id === values.vehicle)[0],
                time : this.state.time,
                driver : drivers && drivers.filter(d => d.id === values.driver)[0],
                helper : null,
                deptLoc : {
                    lat : deptLat,
                    lng : deptLng
                },
                arrLoc : {
                    lat : arrLat,
                    lng : arrLng
                }
            }
            
            addRoute && addRoute(newRoute)
            this.props.history.push('/')
        }
        else {
            formikApi.setSubmitting(false);
        }

        
    };

    handleOnCancel = () => {
        this.props.history.push('/')
    }

    render() {

        return (
            <Modal open>
                <Modal.Header className="space-between">
                    <span>Add Route</span>
                    <Icon className="space-between" onClick={this.handleRedirectMainPage} name="close" />
                </Modal.Header>
                <Modal.Content >
                    <Form 
                        initialValues={this.props.person} 
                        onSubmit={this.handleSubmit}
                        onReset={this.handleOnCancel}
                    >
                        <FormikInput 
                            label="Name" 
                            name="name" 
                        />

                        <Dropdown 
                            clearable 
                            options={this.getMapOfAllVehicles()} 
                            selection 
                            name="vehicle"
                            label="Vehicle"
                            placeholder='All Vehicles' 
                        />

                        <Form.Field>
                            <label>Time</label>
                            <Input
                                onChange={this.handleOnChangeTime}
                                type="time"
                                className=" w-full"
                            />
                        </Form.Field>
                        

                        <Dropdown 
                            clearable 
                            options={this.getMapOfAllDrivers()} 
                            selection 
                            name="driver"
                            label="Driver"
                        />

                        <Dropdown
                            clearable
                            options={[{
                                key: Status.DISPATCHED,
                                value: Status.DISPATCHED,
                                text: Status.DISPATCHED
                            },{
                                key: Status.FINISHED,
                                value: Status.FINISHED,
                                text: Status.FINISHED
                            }]}
                            selection
                            label="Status"
                            name="status"
                        />

                        <div className="space-between">
                            <Form.Group>
                                <FormikInput
                                    required
                                    label="Dep. Lat"
                                    name="deptLat"
                                />
                                <FormikInput
                                    required
                                    label="Dep. Long"
                                    name="deptLng"
                                />
                            </Form.Group>
                            <Form.Group>
                                <FormikInput
                                    required
                                    label="Arr. Lat"
                                    name="arrLat"
                                />
                                <FormikInput
                                    required
                                    label="Arr. Long"
                                    name="arrLng"
                                />
                            </Form.Group>
                        </div>

                        
                        

                        <Button.Submit>
                            Submit
                        </Button.Submit>
                        <Button.Reset>Cancel</Button.Reset>
                    </Form>

                </Modal.Content>
            </Modal>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        vehicles: state.vehicles,
        routes: state.routes,
        drivers : state.drivers
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addRoute: (newRoute) => {
            dispatch(addRoute(newRoute))
        }
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AddRouteView)
)