import React from 'react'
import Chart from 'chart.js'
import uuidv1 from 'uuid/v1';
import { Segment } from 'semantic-ui-react';
import injectSheet from 'react-jss'
import Graph from '../Graph';


const styles = {
    canvas : {
        width : '100%', 
        height : '100%', 
    }
}

const Radar = ({
    classes,
    data,
    ...props
}) => {
    
    const id = React.useState(uuidv1());

    React.useEffect(() => {
        const ctx = document.getElementById(id);
        new Chart(ctx, {
            type: 'radar',
            data,
        });
    }, [])

    return <Graph>
        <canvas id={id} className={classes.canvas}></canvas>
    </Graph>
}

export default injectSheet(styles)(Radar);

