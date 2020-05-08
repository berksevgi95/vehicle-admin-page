import React from 'react'
import Chart from 'chart.js'
import uuidv1 from 'uuid/v1';
import injectSheet from 'react-jss'
import Graph from '../Graph';


const styles = {
    canvas : {
        width : '100%', 
        height : '100%', 
    }
}

const Pie = ({
    classes,
    data,
    options,
    children,
    className,
    ...props
}) => {
    
    const id = React.useState(uuidv1());

    React.useEffect(() => {
        const ctx = document.getElementById(id);
        new Chart(ctx, {
            type: 'pie',
            data,
            options : {
                responsive : true,
                maintainAspectRatio : false,
                ...options
            }
        });
    }, [])

    return (
        <Graph className={className}>
            <canvas id={id} className={classes.canvas}></canvas>
            {children}
        </Graph>
    )
}

export default injectSheet(styles)(Pie);

