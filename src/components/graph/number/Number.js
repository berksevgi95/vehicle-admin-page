import React from 'react'
import injectSheet from 'react-jss'
import Graph from '../Graph';


const styles = {
    value : {
        width : '100%', 
        color: '#51beb3',
        fontSize: 30,
    },
    label : {
        width : '100%', 
        fontSize: 15,
        marginTop: 5
    }
}

const Pie = ({
    classes,
    data,
    className,
}) => {

    return (
        <Graph className={className}>
            <div className="flex h-full">
                <div className="w-2/3 flex">
                    <div className="m-auto ml-8">
                        <div className={classes.value}>
                            {data.value}
                        </div>
                        <div className={classes.label}>
                            {data.label}
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex">
                    <div className="m-auto">
                        {data.icon}
                    </div>
                </div>
            </div>
        </Graph>
    )
}

export default injectSheet(styles)(Pie);

