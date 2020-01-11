import React from 'react'
import injectSheet from 'react-jss'

const styles = {
    containerWidth : {
        width : 'calc(100% - 150px) !important',
    },
    fullWidth :  {
        width : '100% !important'
    },
    '@media screen and (max-width: 599px)': {
        containerWidth: {
            width: "100% !important"
        }
    }
}

const Container = ({
    classes,
    children,
    horizontal,
    ...props
}) => {
    return <div className={horizontal ? classes.fullWidth : classes.containerWidth}>
        {children}
    </div>
}

export default injectSheet(styles)(Container)