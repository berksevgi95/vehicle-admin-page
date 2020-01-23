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
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
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
                            borderColor: "#3e95cd",
                            fill: false
                        }, {
                            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                            label: "Asia",
                            borderColor: "#8e5ea2",
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
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
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
                                backgroundColor: "rgba(179,181,198,0.2)",
                                borderColor: "rgba(179,181,198,1)",
                                pointBorderColor: "#fff",
                                pointBackgroundColor: "rgba(179,181,198,1)",
                                data: [8.77, 55.61, 21.69, 6.62, 6.82]
                            }, {
                                label: "2050",
                                fill: true,
                                backgroundColor: "rgba(255,99,132,0.2)",
                                borderColor: "rgba(255,99,132,1)",
                                pointBorderColor: "#fff",
                                pointBackgroundColor: "rgba(255,99,132,1)",
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