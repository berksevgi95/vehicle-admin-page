import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles = {
    graphContainer : {
        position: 'relative',
        background: '#f5f5f5',
        boxSizing: 'border-box',
        height: '100%'
    },
}

const Graph  = ({
    classes,
    children,
    className,
    ...props
}) => {
    return (
        <div className={classNames(classes.graphContainer, className)}>
            {children}
        </div>
    )
}

export default injectSheet(styles)(Graph);

