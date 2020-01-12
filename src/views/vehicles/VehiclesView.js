import React from 'react'
import {
    Header,
    Image,
    Segment,
    Table, 
    Rating
} from 'semantic-ui-react'
import * as VehiclesActions from './store/vehicles.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const VehiclesView = ({
    vehicles,
    getVehicles,
    resetVehicles,
    history,
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
        <Header as='h3'>Application Content</Header>
        <Table celled padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>id</Table.HeaderCell>
                    <Table.HeaderCell>Brand</Table.HeaderCell>
                    <Table.HeaderCell>Model Name</Table.HeaderCell>
                    <Table.HeaderCell>req</Table.HeaderCell>
                    <Table.HeaderCell>req_alter</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {vehicles &&
                    vehicles.length > 0 &&
                    vehicles.map(vehicle => (
                        <Table.Row onDoubleClick={handleNavigateDetail} key={vehicle.id}>
                            <Table.Cell>
                                <Header as='h2' textAlign='center'>
                                    {vehicle.id}
                                </Header>
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
                        </Table.Row>
                    ))}
                
            </Table.Body>
        </Table>
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
    
