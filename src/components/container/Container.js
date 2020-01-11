import React from 'react'
import injectSheet from 'react-jss'

const styles = {
    fullWidth :  {
        width : '100% !important'
    },
}

const Container = ({
    classes,
    children,
    horizontal,
    ...props
}) => {
    return <div className={classes.fullWidth}>
        {children}
    </div>
}

export default injectSheet(styles)(Container)