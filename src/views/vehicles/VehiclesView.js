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
    ...props
}) => {

    React.useEffect(() => {
        getVehicles && getVehicles()
    }, [])

    console.log(vehicles)

    return <Segment basic className="view">
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
                        <Table.Row>
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
                
                {/* <Table.Row>
                    <Table.Cell>
                        <Header as='h2' textAlign='center'>
                            A
                        </Header>
                    </Table.Cell>
                    <Table.Cell singleLine>Weight</Table.Cell>
                    <Table.Cell>
                        <Rating icon='star' defaultRating={3} maxRating={3} />
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        100% <br />
                        <a href='#'>65 studies</a>
                    </Table.Cell>
                    <Table.Cell>
                        Creatine is the reference compound for power improvement, with numbers
                        from one meta-analysis to assess potency
                    </Table.Cell>
                </Table.Row> */}
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VehiclesView)

