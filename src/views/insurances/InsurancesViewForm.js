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
import Tree from '../../components/tree/Tree';


const InsurancesViewForm = ({
    children,
    postInsurance,
    addInsuranceDialog,
    closeInsuranceForm,
    ...props
}) => {


    return (
        <Modal dimmer={"blurring"} open onClose={closeInsuranceForm}>
            <Modal.Header>Add New Insurance</Modal.Header>
            <Modal.Content>
                <Tree
                    children = {[{
                        name : 'asdasda',
                        children : [{
                            name : 'basdacx',
                            children : []
                        }]
                    }, {
                        name : 'cnbmb',
                        children : []
                    }, {
                        name : 'zasdasd',
                        children : [{
                            name : 'd',
                            children : []
                        }, {
                            name : 'e',
                            children : [{
                                name : 'f',
                                children : []
                            },]
                        }, {
                            name : 'g',
                            children : []
                        }]
                    }]}
                />
                
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

