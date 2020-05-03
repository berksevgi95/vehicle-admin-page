import React from 'react'

import * as VehiclesActions from './store/vehicles.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Formik } from "formik";

import {
    Dialog,
    BSTheme,
    Input,
    Button
} from 'bs-ui-components'


const VehiclesViewForm = ({
    children,
    postVehicle,
    addVehicleDialog,
    closeVehicleForm,
    ...props
}) => {

    return (
        <Dialog
            title="Dialog"
            closeOnEsc
            closeButton
            open
            theme={BSTheme.PRIMARY}
            handleClose={closeVehicleForm}
        >
            <Formik
                initialValues={addVehicleDialog.data || {
                    brand: '',
                    modelName: '',
                    req: '',
                    req_alter: '',
                }}
                onSubmit={(values) => {
                    postVehicle(values).then(() => {
                        // formik.resetForm()
                        closeVehicleForm()
                    })
                }}
                validate={({
                    brand,
                    modelName,
                    req,
                    req_alter
                }) => {
                    const errors = {};
                    if (!req) {
                        errors.req = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(req)
                    ) {
                        errors.req = 'Invalid email address';
                    }
                    return errors;
                }}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <Input
                                className="mb-4"
                                id="brand"
                                name="brand"
                                type="text"
                                value={values.brand}
                                onChange={handleChange}
                                placeholder="Ex. Ford, Volkswagen, etc."
                            >
                                Brand
                            </Input>
                            <Input
                                className="mb-4"
                                id="modelName"
                                name="modelName"
                                type="text"
                                value={values.modelName}
                                onChange={handleChange}
                                placeholder="Ex. Focus, Golf, etc."
                            >
                                Model Name
                            </Input>
                            <Input
                                id="req"
                                className="mb-4"
                                name="req"
                                type="text"
                                value={values.req}
                                onChange={handleChange}
                                placeholder="joe@schmoe.com"
                            >
                                Req
                            </Input>
                            <Input
                                className="mb-8"
                                id="req_alter"
                                name="req_alter"
                                type="text"
                                value={values.req_alter}
                                onChange={handleChange}
                            >
                                Req Alter
                            </Input>

                            <div className="flex justify-between">
                                <Button
                                    type="button"
                                    className="outline"
                                    onClick={closeVehicleForm}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    theme={BSTheme.SECONDARY}
                                >
                                    Submit
                                </Button>
                            </div>

                        </form>
                    );
                }}
            </Formik>   
        </Dialog>
    )
}


const mapStateToProps = (state, ownProps) => {
    return { ...state.vehicles }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        ...VehiclesActions,
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VehiclesViewForm)

