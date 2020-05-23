// import React from 'react'
// import socketIOClient from "socket.io-client";
// import {
//     Header,
//     Segment,
// } from 'semantic-ui-react'
// import OlMap from "ol/map";
// import OlView from "ol/view";
// import OlLayerTile from "ol/layer/tile";
// import OlSourceOSM from "ol/source/osm";
// import OlFeature from 'ol/feature'
// import OlGeomPoint from 'ol/geom/point'
// import OlSourceVector from 'ol/source/vector'
// import OlLayerVector from 'ol/layer/vector'
// import OlProj from 'ol/proj'

// const VehiclesDetailView = ({
//     ...props
// }) => {


//     React.useEffect(() => {


//         var vectorSource = new OlSourceVector({
//             features: []
//         });

//         const olmap = new OlMap({
//             target: null,
//             layers: [
//                 new OlLayerTile({
//                     source: new OlSourceOSM()
//                 }),
//                 new OlLayerVector({
//                     source: vectorSource,
//                 })
//             ],
//             view: new OlView({
//                 center: [0, 0],
//                 zoom: 3
//             })
//         });
//         olmap.setTarget("map");

//         const socket = socketIOClient('http://localhost:4000');
//         socket.on('change color', (col) => {

//             vectorSource.clear()
//             col && col.length > 0 && col.forEach(coordinate => {
//                 const marker = new OlFeature({
//                     geometry: new OlGeomPoint(
//                         OlProj.fromLonLat([coordinate.lon, coordinate.lat])
//                     )
//                 });
//                 vectorSource.addFeature(marker)
//             })
            

//         })

//     }, [])

//     return <Segment basic className="w-full h-full">
//         <Header as='h3'>Application Content</Header>
//         <div id="map" style={{ width: "100%", height : 'calc(100% - 40px)' }}>
//         </div>

//     </Segment>
// }

// export default VehiclesDetailView






















import React from 'react'
import { Vehicles } from '../../../@fake-db'
import injectSheet from 'react-jss'
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Table, Button } from 'bs-ui-components';
import uuidV1 from 'uuid/v1'
import { Line, Map } from '../../../components/graph';
import Collapsable from '../../../components/collapsable/Collapsable';
import VehiclesViewForm from '../VehiclesViewForm';
import * as VehiclesActions from '../store/vehicles.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react';
import Image from '../../../components/image/Image';

const styles = {
    
    color : {
        color: '#51beb3'
    },
    
    card : {
        marginTop: 10,
        marginBottom: 10,
        background: '#f5f5f5',
        display: 'flex',
        padding: 10,
    },

    consumptionIndicator : {
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: 'normal',
        fontSize: 50,
        marginLeft: 10,
        color: '#51beb3'
    },


    listItem : {
        position: 'absolute',
        width: 2,
        left: 0,
        top: 30,
        background: '#51beb3',
        height: '100%',
        zIndex: 1,
        
        '&:before' : {
            content:"''",
            width:10,
            height:10,
            borderRadius:'50%',
            background: '#51beb3',
            display:'flex',
            marginLeft: -4,
        }
    }
}


const VehiclesDetailView = ({
    match,
    classes,
    addVehicleDialog,
    openVehicleForm,
    ...props
}) => {
    const [vehicle, setVehicle] = React.useState({
        id: Vehicles.length + 1,
        img: null,
        brand: '',
        modelName: '',
        year: NaN,
        km: NaN,
        transmission: null,
        cubic: null,
        horsepower: null,
        events: []
    })

    React.useEffect(() => {
        const _vehicle = Vehicles.filter(v => v.id.toString() === match.params.id);
        if (_vehicle && _vehicle.length > 0) {
            setVehicle(_vehicle[0])
        }
    }, []);

    return (
        <div className="fadein-animation p-4">
            <h3 className="text-2xl">Vehicle Detail</h3>
            <div className="flex flex-col sm:flex-row w-full">
                <div className="w-full sm:w-3/4">
                    <div className="flex justify-between mt-6">
                        <span className="text-xl">General Info</span>
                        <Button onClick={openVehicleForm.bind(this, vehicle)}>
                            <Icon name="edit" className="m-icon"/>
                        </Button>
                    </div>
                    <div className={classes.card}>
                        <div className="w-1/3">
                            <Image src={vehicle.img} />
                        </div>
                        <div className="w-2/3 pl-3">
                            <div className={classNames(classes.color, "mb-1")}>
                                {`${vehicle.plateNumber}`}
                            </div>
                            <div className="text-2xl mb-2 font-bold">
                                {`${vehicle.brand} ${vehicle.modelName}`}
                            </div>
                            <div className="mb-4">
                                {`${vehicle.modelType}`}
                            </div>

                            <div className="mb-1">
                                <span className="font-bold">
                                    <FormattedMessage id="vehicles.year" />
                                </span>
                                {` : `}
                                {`${vehicle.year}`}
                            </div>
                            <div className="mb-1">
                                <span className="font-bold">
                                    <FormattedMessage id="vehicles.km" />
                                </span>
                                {` : `}
                                {`${vehicle.km}`}
                            </div>
                            <div className="mb-1">
                                <span className="font-bold">
                                    <FormattedMessage id="vehicles.transmission" />
                                </span>
                                {` : `}
                                {`${vehicle.transmission}`}
                            </div>
                            <div className="mb-1">
                                <span className="font-bold">
                                    <FormattedMessage id="vehicles.cubic" />
                                </span>
                                {` : `}
                                {`${vehicle.cubic}`}
                            </div>
                            <div className="mb-1">
                                <span className="font-bold">
                                    <FormattedMessage id="vehicles.horsepower" />
                                </span>
                                {` : `}
                                {`${vehicle.horsepower}`}
                            </div>
                            <div className="mb-1">
                                <span className="font-bold">
                                    <FormattedMessage id="vehicles.fuelType" />
                                </span>
                                {` : `}
                                {`${vehicle.fuelType}`}
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <span className="text-xl">Maintenances</span>
                    </div>
                    <div className={classes.card}>
                        <Table.Table>
                            <Table.Head>
                                <Table.Row>
                                    <Table.Title>
                                        Type
                                    </Table.Title>
                                    <Table.Title>
                                        Current KM
                                    </Table.Title>
                                    <Table.Title>
                                        Cost
                                    </Table.Title>
                                    <Table.Title>
                                        Date
                                    </Table.Title>
                                    <Table.Title>
                                        Description
                                    </Table.Title>
                                </Table.Row>
                            </Table.Head>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        Periodic
                                    </Table.Cell>
                                    <Table.Cell>
                                        25000
                                    </Table.Cell>
                                    <Table.Cell>
                                        370 TL
                                    </Table.Cell>
                                    <Table.Cell>
                                        27/06/2020
                                    </Table.Cell>
                                    <Table.Cell>
                                        Brakes, fluids changed
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Periodic
                                    </Table.Cell>
                                    <Table.Cell>
                                        30000
                                    </Table.Cell>
                                    <Table.Cell>
                                        250 TL
                                    </Table.Cell>
                                    <Table.Cell>
                                        27/12/2020
                                    </Table.Cell>
                                    <Table.Cell>
                                        Spark plugs, fluids changed
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Fix
                                    </Table.Cell>
                                    <Table.Cell>
                                        35000
                                    </Table.Cell>
                                    <Table.Cell>
                                        1200 TL
                                    </Table.Cell>
                                    <Table.Cell>
                                        03/05/2021
                                    </Table.Cell>
                                    <Table.Cell>
                                        Front bumper changed
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table.Table>
                    </div>

                    <div className="mt-6">
                        <span className="text-xl">Crashes</span>
                    </div>
                    <div className={classes.card}>
                        <Table.Table>
                            <Table.Head>
                                <Table.Row>
                                    <Table.Title>
                                        Location
                                    </Table.Title>
                                    <Table.Title>
                                        Current KM
                                    </Table.Title>
                                    <Table.Title>
                                        Cost
                                    </Table.Title>
                                    <Table.Title>
                                        Date
                                    </Table.Title>
                                    <Table.Title>
                                        Description
                                    </Table.Title>
                                </Table.Row>
                            </Table.Head>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        Dumlupınar Blv.
                                    </Table.Cell>
                                    <Table.Cell>
                                        25000
                                    </Table.Cell>
                                    <Table.Cell>
                                        5000 TL
                                    </Table.Cell>
                                    <Table.Cell>
                                        27/06/2020
                                    </Table.Cell>
                                    <Table.Cell>
                                        -
                                    </Table.Cell>
                                </Table.Row>
                                
                            </Table.Body>
                        </Table.Table>
                    </div>

                    <div className="mt-6">
                        <span className="text-xl">Penalties</span>
                    </div>
                    <div className={classes.card}>
                        <Table.Table>
                            <Table.Head>
                                <Table.Row>
                                    <Table.Title>
                                        Location
                                    </Table.Title>
                                    <Table.Title>
                                        Current KM
                                    </Table.Title>
                                    <Table.Title>
                                        Cost
                                    </Table.Title>
                                    <Table.Title>
                                        Date
                                    </Table.Title>
                                    <Table.Title>
                                        Description
                                    </Table.Title>
                                </Table.Row>
                            </Table.Head>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        Dumlupınar Blv.
                                    </Table.Cell>
                                    <Table.Cell>
                                        25000
                                    </Table.Cell>
                                    <Table.Cell>
                                        5000 TL
                                    </Table.Cell>
                                    <Table.Cell>
                                        27/06/2020
                                    </Table.Cell>
                                    <Table.Cell>
                                        Overspeed
                                    </Table.Cell>
                                </Table.Row>
                                
                            </Table.Body>
                        </Table.Table>
                    </div>

                </div>
                <div className="w-full sm:w-1/4 sm:ml-6">
                    <div className="mt-6">
                        <span className="text-xl">Events</span>
                    </div>
                    <Collapsable className={classes.card}>
                        <ul className="px-4 overflow-hidden">
                            {vehicle.events
                                && vehicle.events.length > 0
                                && vehicle.events.map((event, index) => (
                                <li key={index} className="relative p-4">
                                    <div className={classes.listItem} />
                                    <div className="ml-2">
                                        <div className="w-full font-bold">{event.type}</div>
                                        <div className="w-full">{event.value}</div>
                                        <div className="w-full text-sm">{event.description}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Collapsable>
                    <div className="mt-6">
                        <span className="text-xl">Location</span>
                    </div>
                    <div className="mt-4">
                        <Map
                            id={uuidV1()}
                        />
                    </div>
                    <div className="mt-6">
                        <span className="text-xl">Miles per Day</span>
                    </div>
                    <div className="mt-4">
                        <Line
                            className="p-4"
                            id={uuidV1()}
                            data={{
                                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                                datasets: [{
                                    data: [86, 514, 106, 106, 607, 111, 853],
                                    label: "Africa",
                                    borderColor: '#51beb3',
                                    fill: false
                                }]
                            }}
                            options={{
                                legend: {
                                    display: false
                                },
                            }}
                        />
                    </div>
                    <div className="mt-6">
                        <span className="text-xl">Consumption</span>
                    </div>
                    <div className={classes.card}>
                        <div>
                            <div className="flex flex-col lg:flex-row lg:items-end">
                                <p className={classes.consumptionIndicator}>
                                    7.8lt
                                </p>
                                <p className="text-3xl ml-2">
                                    /100km
                                </p>
                            </div>
                            

                            <div className="p-4">
                                <div className="my-2">City: <span className="font-bold">8.6lt/100km</span></div>
                                <div className="my-2">Urban: <span className="font-bold">7.0lt/100km</span></div>
                                <div className="my-2">Avg. Consumption on May 2020: <span className="font-bold">7.8lt/100km</span></div>
                                <div className="my-2">Avg. Consumption on April 2020: <span className="font-bold">6.5lt/100km</span></div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
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


export default injectSheet(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(VehiclesDetailView)
);


// export default injectSheet(styles)(VehiclesDetailView) 