import React from 'react'
// import socketIOClient from "socket.io-client";
// import {
//     Header,
//     Segment,
// } from 'semantic-ui-react'
import OlMap from "ol/map";
import OlView from "ol/view";
import OlLayerTile from "ol/layer/tile";
import OlSourceOSM from "ol/source/osm";
// import OlFeature from 'ol/feature'
// import OlGeomPoint from 'ol/geom/point'
import OlSourceVector from 'ol/source/vector'
import OlLayerVector from 'ol/layer/vector'
import OlControl from 'ol/control'
// import OlProj from 'ol/proj'

import Graph from '../Graph';


const Map = ({
    id,
    className,
}) => {


    React.useEffect(() => {


        var vectorSource = new OlSourceVector({
            features: []
        });

        const olmap = new OlMap({
            target: null,
            layers: [
                new OlLayerTile({
                    source: new OlSourceOSM()
                }),
                new OlLayerVector({
                    source: vectorSource,
                })
            ],
            view: new OlView({
                center: [0, 0],
                zoom: 3
            }),
            controls : new OlControl.defaults({
                attribution : false,
                zoom : false,
                rotate: false
            }),
        });
        olmap.setTarget(id);

        // const socket = socketIOClient('http://localhost:4000');
        // socket.on('change color', (col) => {

        //     vectorSource.clear()
        //     col && col.length > 0 && col.forEach(coordinate => {
        //         const marker = new OlFeature({
        //             geometry: new OlGeomPoint(
        //                 OlProj.fromLonLat([coordinate.lon, coordinate.lat])
        //             )
        //         });
        //         vectorSource.addFeature(marker)
        //     })
            

        // })

    }, [])

    return (
        <Graph className={className}>
            <div id={id} className="w-full h-full"/>
        </Graph>
    )
}

export default Map