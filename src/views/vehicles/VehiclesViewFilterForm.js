import React from 'react'
import { 
    Sidebar, 
    Menu, 
    Form,
    Button,
    Input
} from 'semantic-ui-react'
import * as VehiclesActions from './store/vehicles.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useFormik } from 'formik';
import injectSheet from 'react-jss'
import Filterbar from '../../components/filterbar/Filterbar';

const styles = {
    sidebar :  {
        padding : 15,
        width : '300px !important',
    },
}

const VehiclesViewFilterForm = ({
    classes,
    vehicleFilterbar,
    closeVehicleFilterbar,
    ...props
}) => {

    const formik = useFormik({
        initialValues: vehicleFilterbar.data || {
            brand: '',
            modelName: '',
            req: '',
            req_alter: '',
        },
        onSubmit: values => {
            console.log(values)
            closeVehicleFilterbar()
        },
    });

    return <Filterbar onHide={closeVehicleFilterbar}>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Field
                control={Input}
                label='Brand'
                placeholder='Ex. Ford, Volkswagen, etc.'
                id="brand"
            >
                <input
                    id="brand"
                    name="brand"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.brand}
                />
            </Form.Field>
            <Form.Field
                control={Input}
                label='Model Name'
                placeholder='Ex. Focus, Golf, etc.'
                id="modelName"
            >
                <input
                    id="modelName"
                    name="modelName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.modelName}
                />
            </Form.Field>
            <Form.Field
                control={Input}
                label='Req'
                placeholder='joe@schmoe.com'
                id="req"
                error={formik.errors.req && {
                    content: formik.errors.req,
                    pointing: 'above',
                }}
            >
                <input
                    id="req"
                    name="req"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.req}
                />
            </Form.Field>
            <Form.Field
                control={Input}
                label='Req Alter'
                id="req_alter"
            >
                <input
                    id="req_alter"
                    name="req_alter"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.req_alter}
                />
            </Form.Field>
            <Button type='submit'>Filter</Button>
            <Button basic onClick={formik.resetForm}>Clear</Button>
        </Form>
    </Filterbar>
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
    )(VehiclesViewFilterForm)
)