import React from 'react'
import { 
    Sidebar, 
    Menu, 
} from 'semantic-ui-react'
import injectSheet from 'react-jss'

const styles = {
    sidebar :  {
        padding : 15,
        width : '300px !important',
    },
}

const VehiclesViewFilterForm = ({
    classes,
    onHide,
    children,
    ...props
}) => {

    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => setOpen(true))
    }, []) 

    return <Sidebar
        className={classes.sidebar}
        as={Menu}
        animation='overlay'
        icon='labeled'
        direction="right"
        onHide={onHide}
        vertical
        visible={open}
        width='thin'
    >
        {children}
    </Sidebar>
}

export default injectSheet(styles)(
    VehiclesViewFilterForm
)