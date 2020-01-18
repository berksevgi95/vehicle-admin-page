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
    Checkbox,
} from 'semantic-ui-react'
import * as VehiclesActions from './store/vehicles.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import VehiclesViewForm from './VehiclesViewForm';
import VehiclesViewFilterForm from './VehiclesViewFilterForm';
import { List } from 'immutable';

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

    const [selected, setSelected] = React.useState(null);

    React.useEffect(() => {
        getVehicles && getVehicles()

        return resetVehicles
    }, [])

    const toggleSelection = () => {
        selected ? setSelected(null) : setSelected(List())
    }

    const handleNavigateDetail = () => {
        !selected && history && history.push('vehicles/detail')
    }

    const isVehicleChecked = (vehicle) => {
        return Boolean(selected.filter(item => item.id === vehicle.id).size)
    }

    const handleClickRow = (vehicle) => {
        if(selected){
            !isVehicleChecked(vehicle) ? 
                setSelected(selected.push(vehicle)) :
                setSelected(selected.delete(
                    selected.findIndex(item => item.id === vehicle.id)
                ))
        }
    }

    const handleSelectAllVehicles = () => {
        selected.size === 0 ?
            setSelected(vehicles) :
            setSelected(List()) 
    }

    return <Segment basic>
        <div className="flex justify-between">
            <Header as='h3'>Vehicles</Header>
            <div className="flex">
                {selected ? 
                <React.Fragment>
                    <Button compact onClick={openVehicleFilterbar} icon="filter" />
                    <Button compact disabled={selected.size === 0} icon="trash alternate"/>
                </React.Fragment> : 
                <React.Fragment>
                    <Button compact onClick={openVehicleForm.bind(this, null)}>
                        <Icon name="add"></Icon>
                        Add Vehicle
                    </Button>
                    <Button compact onClick={getVehicles} icon="refresh" />
                    <Button compact onClick={openVehicleFilterbar} icon="filter" />
                </React.Fragment>
                
                }
                <Button compact onClick={toggleSelection} icon="tasks" active={Boolean(selected)}/>
            </div>
        </div>
        <Table celled padded selectable>
            <Table.Header>
                <Table.Row>
                    {selected && 
                        <Table.HeaderCell textAlign="center">
                            <Checkbox 
                                onChange={handleSelectAllVehicles}
                                checked={selected.size === vehicles.size}
                                indeterminate={selected.size > 0 && selected.size !== vehicles.size}
                            />
                        </Table.HeaderCell>
                    }
                    <Table.HeaderCell singleLine>id</Table.HeaderCell>
                    <Table.HeaderCell>Brand</Table.HeaderCell>
                    <Table.HeaderCell>Model Name</Table.HeaderCell>
                    <Table.HeaderCell>req</Table.HeaderCell>
                    <Table.HeaderCell>req_alter</Table.HeaderCell>
                    {!selected && <Table.HeaderCell></Table.HeaderCell>}
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {vehicles &&
                    vehicles.size > 0 &&
                    vehicles.map(vehicle => (
                        <Table.Row 
                            onClick={handleClickRow.bind(this, vehicle)} 
                            onDoubleClick={handleNavigateDetail} 
                            key={vehicle.id}
                        >
                            {selected &&
                                <Table.Cell textAlign="center">
                                    <Checkbox checked={isVehicleChecked(vehicle)}/>
                                </Table.Cell>
                            }
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
                            {!selected && 
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
                            }
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
    
