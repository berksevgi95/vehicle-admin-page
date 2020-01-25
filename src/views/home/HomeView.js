import React from 'react'
import {
    Header,
    Segment,
    Button,
} from 'semantic-ui-react'
import {
    Bar,
    Line,
    Pie,
    Radar
} from '../../components/graph'
import injectSheet from 'react-jss'
import color from '../../utils/color'

import { WidthProvider, Responsive } from "react-grid-layout";
import _ from 'lodash'
import uuidV1 from 'uuid/v1'


const ReactGridLayout = WidthProvider(Responsive);


const styles = {
    container : {
        display : 'flex', 
        justifyContent : 'space-between', 
        alignItems : 'center', 
        width : '100%', 
        height : '100%'
    }
}


const HomeView = ({
    classes,
    ...props
}) => {

    const gridRef = React.useRef()
    const [editMode, setEditMode] = React.useState(false);

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    React.useEffect(() => {
        gridRef.current &&
        gridRef.current.onWindowResize()
    }, [])
    
    const colors = (steps, transparent) => color({
        specs: {
            steps,
            hue_start: 150,
            hue_end: 200,
            hue_curve: "easeInQuad",
            sat_start: 20,
            sat_end: 50,
            sat_curve: "easeOutQuad",
            sat_rate: 200,
            lum_start: 100,
            lum_end: 50,
            lum_curve: "linear",
            modifier: 10
        }
    }).map(color => (
        `rgba(
            ${color.rgb[0]}, 
            ${color.rgb[1]}, 
            ${color.rgb[2]}, 
            ${transparent || 1}
        )`
    ));

    const generateLayouts = () => {
        const layout = [{
            x: 0,
            y: 0,
            w: 6,
            h: 8,
            i: uuidV1(),
            minW : 6,
            minH : 8,
            chart : {
                type : Bar,
                data : {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: colors(6, .3),
                        borderColor: colors(6),
                        borderWidth: 1
                    }]
                }
            }
        }, {
            x: 6,
            y: 0,
            w: 6,
            h: 8,
            i: uuidV1(),
            minW : 6,
            minH : 8,
            chart : {
                type : Line,
                data : {
                    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                    datasets: [{
                        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                        label: "Africa",
                        borderColor: colors(2)[0],
                        fill: false
                    }, {
                        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                        label: "Asia",
                        borderColor: colors(2)[1],
                        fill: false
                    }]
                }
            }
        }, {
            x: 0,
            y: 8,
            w: 6,
            h: 8,
            i: uuidV1(),
            minW : 6,
            minH : 8,
            chart : {
                type : Pie,
                data : {
                    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                    datasets: [{
                        label: "Population (millions)",
                        backgroundColor: colors(5),
                        data: [2478, 5267, 734, 784, 433]
                    }]
                }
            }
        }, {
            x: 6,
            y: 8,
            w: 6,
            h: 8,
            i: uuidV1(),
            minW : 6,
            minH : 8,
            chart : {
                type : Radar,
                data : {
                    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                    datasets: [
                        {
                            label: "1950",
                            fill: true,
                            backgroundColor: colors(2, .2)[0],
                            borderColor: colors(2)[0],
                            pointBorderColor: "#fff",
                            pointBackgroundColor: colors(2)[0],
                            data: [8.77, 55.61, 21.69, 6.62, 6.82]
                        }, {
                            label: "2050",
                            fill: true,
                            backgroundColor: colors(2, .2)[1],
                            borderColor: colors(2)[1],
                            pointBorderColor: "#fff",
                            pointBackgroundColor: colors(2)[1],
                            pointBorderColor: "#fff",
                            data: [25.48, 54.16, 7.61, 8.06, 4.45]
                        }
                    ]
                }
            }
        }]

        return layout.map(l => {
            return (
                <div key={l.i} data-grid={l} columns={2}>
                    <l.chart.type data={l.chart.data}></l.chart.type>
                </div>
            );
        });
    }


    return <Segment basic>
        <div className="flex justify-between">
            <Header as='h3'>Home</Header>
            <Button compact onClick={toggleEditMode} icon={editMode ? "check" : "edit"} />
        </div>
        <ReactGridLayout 
            ref={gridRef}
            onLayoutChange={(layouts) => {}} 
            isDraggable = {editMode}
            isResizable = {editMode}
            rowHeight = {30}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
            {generateLayouts()}
        </ReactGridLayout>
        
    </Segment>
}

export default injectSheet(styles)(HomeView)