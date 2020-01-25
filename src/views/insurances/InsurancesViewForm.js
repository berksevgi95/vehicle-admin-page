import React from 'react'
import { 
    Button, 
    Modal, 
    Form, 
    Input
} from 'semantic-ui-react'

import * as InsurancesActions from './store/insurances.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useFormik } from 'formik';


const InsurancesViewForm = ({
    children,
    postInsurance,
    addInsuranceDialog,
    closeInsuranceForm,
    ...props
}) => {

    const formik = useFormik({
        initialValues: addInsuranceDialog.data || {
            brand: '',
            modelName: '',
            req: '',
            req_alter: '',
        },
        onSubmit: values => {
            postInsurance(values).then(() => {
                formik.resetForm()
                closeInsuranceForm()
            })
        },
        validate: ({
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
        }
    });

    return (
        <Modal dimmer={"blurring"} open onClose={closeInsuranceForm}>
            <Modal.Header>Add New Insurance</Modal.Header>
            <Modal.Content>
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
                    <Button type='submit'>Submit</Button>
                </Form>
            </Modal.Content>
        </Modal>
    )
}


const mapStateToProps = (state, ownProps) => {
    return { ...state.insurances }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        ...InsurancesActions,
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InsurancesViewForm)

