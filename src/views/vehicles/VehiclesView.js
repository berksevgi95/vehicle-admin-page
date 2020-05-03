import React from 'react'
import {
    Table, 
    Icon,
    Menu,
    Checkbox,
} from 'semantic-ui-react'
import * as VehiclesActions from './store/vehicles.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import VehiclesViewForm from './VehiclesViewForm';
import VehiclesViewFilterForm from './VehiclesViewFilterForm';
import { List } from 'immutable';

import {
    Button, BSTheme
} from 'bs-ui-components'

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

    return <div className="w-full h-full p-4">
        <div className="flex justify-between">
            <h3 className="text-2xl">Vehicles</h3>
            <div className="flex">
                {selected ? 
                <React.Fragment>
                    <Button onClick={openVehicleFilterbar}>
                        <Icon name="filter"></Icon>
                    </Button>
                    <Button disabled={selected.size === 0}>
                        <Icon name="trash alternate"></Icon>
                    </Button>
                </React.Fragment> : 
                <React.Fragment>
                    <Button
                        theme={BSTheme.SECONDARY}
                        className="mr-2"
                        id="add-vehicle-dialog-button"
                        onClick={openVehicleForm.bind(this, null)}
                    >
                        <Icon name="add"></Icon>
                        Add Vehicle
                    </Button>
                    <Button
                        className="mr-2 hidden sm:block"
                        onClick={getVehicles}
                    >
                        <Icon name="refresh m-icon"></Icon>
                    </Button>
                    <Button
                        className="mr-2 hidden sm:block"
                        onClick={openVehicleFilterbar}
                    >
                        <Icon name="filter m-icon"></Icon>
                    </Button>
                </React.Fragment>
                }
                <Button
                    onClick={toggleSelection}
                    disabled={!Boolean(selected)}
                    className="hidden sm:block"
                >
                    <Icon name="tasks m-icon"></Icon>
                </Button>
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
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>

        {vehicleFilterbar &&
            vehicleFilterbar.open &&
            <VehiclesViewFilterForm/>
        }
        
        {addVehicleDialog &&
            addVehicleDialog.open &&
            <VehiclesViewForm/>
        }
    </div>
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
    
