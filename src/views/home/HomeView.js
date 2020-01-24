import React from 'react'
import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
import {
    Bar,
    Line,
    Pie,
    Radar
} from '../../components/graph'
import injectSheet from 'react-jss'
import color from '../../utils/color'

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

    return <Segment basic>
        <Header as='h3'>Home</Header>

        <Grid doubling columns={2}>
            <Grid.Column>
                <Bar
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
                />
            </Grid.Column>
            <Grid.Column>
                <Line
                    data={{
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
                    }}
                />
            </Grid.Column>
        </Grid>

        <Grid doubling columns={2}>
            <Grid.Column>
                <Pie
                    data={{
                        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                        datasets: [{
                            label: "Population (millions)",
                            backgroundColor: colors(5),
                            data: [2478, 5267, 734, 784, 433]
                        }]
                    }}
                />
            </Grid.Column>
            <Grid.Column>
                <Radar
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
            </Grid.Column>
        </Grid>


        
    </Segment>
}

export default injectSheet(styles)(HomeView)