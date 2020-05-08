import React from 'react'
import Chart from 'chart.js'
import injectSheet from 'react-jss'
import Graph from '../Graph';


const styles = {
    canvas : {
        width : '100%', 
        height : '100%', 
    }
}

const Line = ({
    classes,
    data,
    options,
    className,
    children,
    id,
}) => {
    
    React.useEffect(() => {
        const ctx = document.getElementById(id);
        new Chart(ctx, {
            type: 'line',
            data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                responsive : true,
                maintainAspectRatio : false,
                ...options
            }
        });
    }, [])

    return (
        <Graph className={className}>
            <canvas id={id} className={classes.canvas} />
            {children}
        </Graph>
    );
}

export default injectSheet(styles)(Line);

