import React from 'react'

import * as VehiclesActions from './store/vehicles.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { Formik } from "formik";

import {
    Dialog,
    BSTheme,
    Input,
    Button
} from 'bs-ui-components'


const styles = {
    dialog : {
        '& .panel' : {
            '& .content' : {
                overflow: 'inherit'
            }
        }
    }
}

const VehiclesViewForm = ({
    children,
    postVehicle,
    addVehicleDialog,
    closeVehicleForm,
    classes,
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
            className={classes.dialog}
        >
            <Formik
                initialValues={addVehicleDialog.data || {
                    brand: '',
                    modelName: '',
                    year: '',
                    km: '',
                }}
                onSubmit={(values, formikHelpers) => {
                    postVehicle(values).then(() => {
                        formikHelpers.resetForm()
                        closeVehicleForm()
                    })
                }}
                validate={({
                    brand,
                    modelName,
                    year,
                    km
                }) => {
                    const errors = {};
                    if (!brand) {
                        errors.brand = 'Required';
                    }
                    if (!modelName) {
                        errors.modelName = 'Required';
                    }
                    if (!year) {
                        errors.year = 'Required';
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
                            <div className="mb-4">
                                <Input
                                    id="brand"
                                    name="brand"
                                    type="text"
                                    value={values.brand}
                                    onChange={handleChange}
                                    placeholder="Ex. Ford, Volkswagen, etc."
                                    errorMsg={errors.brand}
                                >
                                    Brand
                                </Input>
                            </div>
                            <div className="mb-4">
                                <Input
                                    id="modelName"
                                    name="modelName"
                                    type="text"
                                    value={values.modelName}
                                    onChange={handleChange}
                                    placeholder="Ex. Focus, Golf, etc."
                                    errorMsg={errors.modelName}
                                >
                                    Model Name
                                </Input>
                            </div>
                            <div className="mb-4">
                                <Input
                                    id="year"
                                    name="year"
                                    type="number"
                                    value={values.year}
                                    onChange={handleChange}
                                    placeholder="Ex. 2010"
                                    errorMsg={errors.year}
                                >
                                    Year
                                </Input>
                            </div>
                            <div className="mb-8">
                                <Input
                                    id="km"
                                    name="km"
                                    type="number"
                                    value={values.km}
                                    placeholder="Ex. 512000"
                                    onChange={handleChange}
                                >
                                    Km
                                </Input>
                            </div>
                            

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

export default injectSheet(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(VehiclesViewForm)
);
