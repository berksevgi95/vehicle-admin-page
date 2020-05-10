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
    Button,
    EMessageTypes,
    Select
} from 'bs-ui-components'
import { FormattedMessage } from 'react-intl';


const styles = {
    dialog : {
        '& .panel' : {
            '& .content' : {
                overflow: 'inherit'
            }
        }
    },
    selectLabels: {
        marginBottom : '5px !important'
    }
}

const VehiclesViewForm = ({
    postVehicle,
    addVehicleDialog,
    closeVehicleForm,
    classes,
}) => {

    return (
        <Dialog
            title={
                addVehicleDialog && addVehicleDialog.data ? 
                    <FormattedMessage id="vehicles.edit" /> :
                    <FormattedMessage id="vehicles.add" />
            }
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
                    transmission: 'Manual',
                    fuelType: 'Gasoline'
                }}
                onSubmit={(values, formikHelpers) => {
                    postVehicle(values)
                        .then(() => {
                            window.messageRef.fire({
                                message: <FormattedMessage id="vehicles.add.success" />,
                                type: EMessageTypes.SUCCESS,
                                timeout: 5000
                            })
                            formikHelpers.resetForm()
                            closeVehicleForm()
                        })
                        .catch((exception) => {
                            window.messageRef.fire({
                                message: exception.error,
                                type: EMessageTypes.ERROR,
                                timeout: 5000
                            })
                        })
                }}
                validate={({
                    brand,
                    modelName,
                    year,
                }) => {
                    const errors = {};
                    if (!brand) {
                        errors.brand = <FormattedMessage id="required" />;
                    }
                    if (!modelName) {
                        errors.modelName = <FormattedMessage id="required" />;
                    }
                    if (!year) {
                        errors.year = <FormattedMessage id="required" />;
                    }
                    return errors;
                }}
            >
                {({
                    values,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleSubmit,
                }) => {
                    return (
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="flex flex-col sm:flex-row w-full">
                                <div className="w-full sm:w-1/3">
                                    <img
                                        className="w-full mb-4 sm:mb-0"
                                        src={values.img || 'assets/images/no_image.svg'}
                                    />
                                </div>
                                <div className="w-full flex flex-col sm:flex-row sm:w-2/3">

                                    <div className="w-1/2 pl-4">
                                        <div className="mb-4">
                                            <Input
                                                id="brand"
                                                name="brand"
                                                type="text"
                                                className="w-full"
                                                value={values.brand}
                                                onChange={handleChange}
                                                placeholder="Ex. Ford, Volkswagen, etc."
                                                errorMsg={errors.brand}
                                            >
                                                <FormattedMessage id="vehicles.brand" />
                                            </Input>
                                        </div>
                                        <div className="mb-4">
                                            <Input
                                                id="modelName"
                                                name="modelName"
                                                type="text"
                                                className="w-full"
                                                value={values.modelName}
                                                onChange={handleChange}
                                                placeholder="Ex. Focus, Golf, etc."
                                                errorMsg={errors.modelName}
                                            >
                                                <FormattedMessage id="vehicles.modelName" />
                                            </Input>
                                        </div>
                                        <div className="mb-4">
                                            <Input
                                                id="year"
                                                name="year"
                                                type="number"
                                                className="w-full"
                                                value={values.year}
                                                onChange={handleChange}
                                                placeholder="Ex. 2010"
                                                errorMsg={errors.year}
                                            >
                                                <FormattedMessage id="vehicles.year" />
                                            </Input>
                                        </div>
                                        <div className="mb-8">
                                            <Input
                                                id="km"
                                                name="km"
                                                type="number"
                                                className="w-full"
                                                value={values.km}
                                                placeholder="Ex. 512000"
                                                onChange={handleChange}
                                            >
                                                <FormattedMessage id="vehicles.km" />
                                            </Input>
                                        </div>
                                    </div>

                                    <div className="w-1/2 pl-4">
                                        <div className="mb-4">
                                            <div className={classes.selectLabels}>
                                                <FormattedMessage id="vehicles.transmission" />
                                            </div>
                                            <Select
                                                id="transmission"
                                                name="transmission"
                                                className="w-full"
                                                value={values.transmission}
                                                options={[{
                                                    label: <FormattedMessage id="vehicles.transmission.manual" />,
                                                    value: 'Manual'
                                                }, {
                                                    label: <FormattedMessage id="vehicles.transmission.automatic" />,
                                                    value: 'Automatic'
                                                }]}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <Input
                                                id="cubic"
                                                name="cubic"
                                                className="w-full"
                                                type="text"
                                                value={values.cubic}
                                                onChange={handleChange}
                                                placeholder="Ex. 1299cc"
                                            >
                                                <FormattedMessage id="vehicles.cubic" />
                                            </Input>
                                        </div>
                                        <div className="mb-4">
                                            <Input
                                                id="horsepower"
                                                name="horsepower"
                                                className="w-full"
                                                type="number"
                                                value={values.horsepower}
                                                onChange={handleChange}
                                                placeholder="Ex. 130HP"
                                            >
                                                <FormattedMessage id="vehicles.horsepower" />
                                            </Input>
                                        </div>
                                        <div className="mb-8">
                                            <div className={classes.selectLabels}>
                                                <FormattedMessage id="vehicles.fuelType" />
                                            </div>
                                            <Select
                                                id="fuelType"
                                                name="fuelType"
                                                className="w-full"
                                                value={values.fuelType}
                                                options={[{
                                                    label: <FormattedMessage id="vehicles.fuelType.gasoline" />,
                                                    value: 'Gasoline'
                                                }, {
                                                    label: <FormattedMessage id="vehicles.fuelType.diesel" />,
                                                    value: 'Diesel'
                                                }]}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            

                            <div className="flex justify-between">
                                <Button
                                    type="button"
                                    className="outline"
                                    onClick={closeVehicleForm}
                                >
                                    <FormattedMessage id="cancel" />
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
