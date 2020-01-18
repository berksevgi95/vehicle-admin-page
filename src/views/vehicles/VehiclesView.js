import React from 'react'
import {
    Header,
    Image,
    Button,
    Segment,
    Table, 
    Icon,
    Menu,
    Sidebar,
} from 'semantic-ui-react'
import * as VehiclesActions from './store/vehicles.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import VehiclesViewForm from './VehiclesViewForm';
import VehiclesViewFilterForm from './VehiclesViewFilterForm';

const VehiclesView = ({
    vehicles,
    getVehicles,
    resetVehicles,
    history,
    addVehicleDialog,
    openVehicleForm,

    vehicleFilterbar,
    openVehicleFilterbar,
    ...props
}) => {

    React.useEffect(() => {
        getVehicles && getVehicles()

        return resetVehicles
    }, [])

    const handleNavigateDetail = () => {
        history && history.push('vehicles/detail')
    }

    return <Segment basic>
        <div className="flex justify-between">
            <Header as='h3'>Application Content</Header>
            <div className="flex">
                <Button compact onClick={openVehicleForm.bind(this, null)}>
                    <Icon name="add"></Icon>
                    Add Vehicle
                </Button>
                <Button compact onClick={getVehicles} icon="refresh"/>
                <Button compact onClick={openVehicleFilterbar} icon="filter"/>
            </div>
        </div>
        <Table celled padded selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>id</Table.HeaderCell>
                    <Table.HeaderCell>Brand</Table.HeaderCell>
                    <Table.HeaderCell>Model Name</Table.HeaderCell>
                    <Table.HeaderCell>req</Table.HeaderCell>
                    <Table.HeaderCell>req_alter</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {vehicles &&
                    vehicles.size > 0 &&
                    vehicles.map(vehicle => (
                        <Table.Row onDoubleClick={handleNavigateDetail} key={vehicle.id}>
                            <Table.Cell>
                                {vehicle.id}
                            </Table.Cell>
                            <Table.Cell singleLine>
                                {vehicle.brand}                            
                            </Table.Cell>
                            <Table.Cell>
                                {vehicle.modelName}
                            </Table.Cell>
                            <Table.Cell textAlign='right'>
                                {vehicle.req}
                            </Table.Cell>
                            <Table.Cell>
                                {vehicle.req_alter}
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                                <Button 
                                    size='mini' 
                                    icon='edit' 
                                    onClick={openVehicleForm.bind(this, vehicle)}
                                />
                                <Button 
                                    size='mini' 
                                    icon='delete' 
                                />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                
            </Table.Body>
        </Table>

        {vehicleFilterbar &&
            vehicleFilterbar.open &&
            <VehiclesViewFilterForm/>
        }
        
        {addVehicleDialog &&
            addVehicleDialog.open &&
            <VehiclesViewForm/>
        }
    </Segment>
}


const mapStateToProps = (state, ownProps) => {
    return { ...state.vehicles }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        ...VehiclesActions,
    }, dispatch);
}

export default 
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(VehiclesView)
    
