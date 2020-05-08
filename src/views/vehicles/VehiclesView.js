import React from 'react'
import {
    // Table, 
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
    Button,
    BSTheme,
    Table
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
    deleteVehicle,
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

    const handleDeleteVehicle = (vehicle) => {
        deleteVehicle(vehicle)
    }

    return (
        <div className="fadein-animation p-4">
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
                            <Icon className="m-icon" name="refresh"></Icon>
                        </Button>
                        <Button
                            className="mr-2 hidden sm:block"
                            onClick={openVehicleFilterbar}
                        >
                            <Icon className="m-icon"  name="filter"></Icon>
                        </Button>
                    </React.Fragment>
                    }
                    <Button
                        onClick={toggleSelection}
                        disabled={!Boolean(selected)}
                        className="hidden sm:block"
                    >
                        <Icon className="m-icon"  name="tasks"></Icon>
                    </Button>
                </div>
            </div>
            

            <Table.Table className="mt-4">
                <Table.Head>
                    <Table.Row>
                        {selected && 
                            <Table.Title>
                                <Checkbox 
                                    onChange={handleSelectAllVehicles}
                                    checked={selected.size === vehicles.size}
                                />
                            </Table.Title>
                        }
                        <Table.Title>
                            id
                        </Table.Title>
                        <Table.Title>
                            Brand
                        </Table.Title>
                        <Table.Title>
                            Model Name
                        </Table.Title>
                        <Table.Title>
                            Year
                        </Table.Title>
                        <Table.Title>
                            Km
                        </Table.Title>
                        {!selected && (
                            <Table.Title/>
                        )}
                    </Table.Row>
                </Table.Head>

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
                                    <Table.Cell>
                                        <Checkbox checked={isVehicleChecked(vehicle)}/>
                                    </Table.Cell>
                                }
                                <Table.Cell>
                                    {vehicle.id}
                                </Table.Cell>
                                <Table.Cell>
                                    {vehicle.brand}                            
                                </Table.Cell>
                                <Table.Cell>
                                    {vehicle.modelName}
                                </Table.Cell>
                                <Table.Cell>
                                    {vehicle.year}
                                </Table.Cell>
                                <Table.Cell>
                                    {vehicle.km}
                                </Table.Cell>
                                {!selected && 
                                    <Table.Cell>
                                        <Button 
                                            onClick={openVehicleForm.bind(this, vehicle)}
                                        >
                                            <Icon className="m-icon" name="edit"></Icon>
                                        </Button>
                                        <Button
                                            onClick={handleDeleteVehicle.bind(this, vehicle)}
                                        >
                                            <Icon className="m-icon" name="delete"></Icon>
                                        </Button>
                                    </Table.Cell>
                                }
                            </Table.Row>
                        ))}
                    
                </Table.Body>
            </Table.Table>

            {vehicleFilterbar &&
                vehicleFilterbar.open &&
                <VehiclesViewFilterForm/>
            }
            
            {addVehicleDialog &&
                addVehicleDialog.open &&
                <VehiclesViewForm/>
            }
        </div>
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
)(VehiclesView)
    
