import React from 'react'
import {
    Icon,
} from 'semantic-ui-react'
import {
    Bar,
    Line,
    Pie,
    Radar,
    Number,
    Map,
} from '../../components/graph'
import injectSheet from 'react-jss'

import { WidthProvider, Responsive } from "react-grid-layout";
import uuidV1 from 'uuid/v1'
import { Button } from 'bs-ui-components'
import color from '../../utils/color'


const ReactGridLayout = WidthProvider(Responsive);

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

const layout = [{
    x: 0,
    y: 0,
    w: 3,
    h: 2,
    i: uuidV1(),
    minW: 2,
    minH: 2,
    maxW: 3,
    maxH: 2,
    chart: (
        <Number
            id={uuidV1()}
            data={{
                value: 12,
                label: 'Active vehicle',
                icon: <Icon size="big" name="car" />
            }}
            options={{
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }],
                },
            }}
        />
    )
}, {
    x: 3,
    y: 0,
    w: 3,
    h: 2,
    i: uuidV1(),
    minW: 2,
    minH: 2,
    maxW: 3,
    maxH: 2,
    chart: (
        <Number
            data={{
                value: 5,
                label: 'Drivers available',
                icon: <Icon size="big" name="user" />
            }}
            options={{
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }],
                },
            }}
        />
    )
}, {
    x: 6,
    y: 0,
    w: 3,
    h: 2,
    i: uuidV1(),
    minW: 2,
    minH: 2,
    maxW: 3,
    maxH: 2,
    chart: (
        <Number
            data={{
                value: 3,
                label: 'Upcoming maintenance',
                icon: <Icon size="big" name="settings" />
            }}
            options={{
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }],
                },
            }}
        />
    )
}, {
    x: 12,
    y: 0,
    w: 3,
    h: 2,
    i: uuidV1(),
    minW: 2,
    minH: 2,
    maxW: 3,
    maxH: 2,
    chart: (
        <Number
            data={{
                value: '120lt',
                label: 'Total consumption',
                icon: <Icon size="big" name="bolt" />
            }}
            options={{
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }],
                },
            }}
        />
    )
}, {
    x: 0,
    y: 4,
    w: 8,
    h: 8,
    i: uuidV1(),
    minW: 1,
    minH: 1,
    chart: (
        <Line
            id={uuidV1()}
            data={{
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [{
                    data: [86, 514, 106, 106, 607, 111, 853, 421, 783, 678],
                    label: "Africa",
                    borderColor: '#51beb3',
                    fill: false
                }, {
                    data: [186, 414, 206, 156, 407, 311, 953, 621, 783, 478],
                    label: "Africa",
                    borderColor: '#51beb3',
                    fill: false
                }]
            }}
            options={{
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }],
                },
            }}
        />
    )
}, {
    x: 8,
    y: 4,
    w: 4,
    h: 8,
    i: uuidV1(),
    minW: 3,
    minH: 4,
    chart: (
        <Line
            id={uuidV1()}
            data={{
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [{
                    data: [86, 514, 106, 106, 607, 111, 853, 221, 783, 2478],
                    label: "Africa",
                    borderColor: '#51beb3',
                    backgroundColor: '#51beb3',
                    fill: true
                }]
            }}
            options={{
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }],
                },
                legend: {
                    display: false
                },
            }}
        >
            <div className="absolute left-0 top-0 p-8 text-4xl">
                <div className="text-sm mb-3">
                    Traffic penalties per month
                </div>
                2478
            </div>
        </Line>
    )
}, {
    x: 0,
    y: 12,
    w: 4,
    h: 10,
    i: uuidV1(),
    minW: 1,
    minH: 1,
    chart: (
        <Map
            id={uuidV1()}
        />
    )
}, {
    x: 4,
    y: 12,
    w: 4,
    h: 10,
    i: uuidV1(),
    minW : 1,
    minH : 1,
    chart: (
        <Bar
            id={uuidV1()}
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: colors(6, .3),
                    borderColor: colors(6),
                    borderWidth: 1
                }]
            }}
            className="p-8"
        />
    )
}, {
    x: 8,
    y: 12,
    w: 2,
    h: 10,
    i: uuidV1(),
    minW : 1,
    minH : 1,
    chart: (
        <Pie
            className="p-8"
            id={uuidV1()}
            data={{
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [{
                    label: "Population (millions)",
                    backgroundColor: colors(5),
                    data: [2478, 5267, 734, 784, 433]
                }]
            }}
        />
    )
}, {
    x: 10,
    y: 12,
    w: 2,
    h: 10,
    i: uuidV1(),
    minW : 1,
    minH : 1,
    chart: (
        <Radar
            className="p-8"
            id={uuidV1()}
            data={{
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
            }}
        />
    )
}]



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
        setTimeout(() => {
            if (gridRef.current) {
                gridRef.current.onWindowResize()
            }
        }, 500)
    }, [])

    return (
        <div className="fadein-animation p-4">
            <div className="flex justify-between">
                <h3 className="text-2xl">Home</h3>
                <Button
                    onClick={toggleEditMode}
                >
                    {editMode ? (
                        <Icon className="m-icon" name="check"></Icon>
                    ) : (
                        <Icon className="m-icon" name="edit"></Icon>
                    )}
                </Button>
            </div>
            <ReactGridLayout
                ref={gridRef}
                onLayoutChange={(layouts) => { }}
                isDraggable={editMode}
                isResizable={editMode}
                rowHeight={30}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            >
                {layout.map(l => {
                    return (
                        <div key={l.i} data-grid={l} columns={2}>
                            {l.chart}
                        </div>
                    );
                })}
            </ReactGridLayout>

        </div>
    );
}

export default injectSheet(styles)(HomeView)