import React from 'react'
import {
    Icon,
    Menu,
    Segment,
    Header,
    Image,
    Sidebar as SemanticUISidebar,
} from 'semantic-ui-react'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import routes from '../../configs/routes';
import { useMediaQuery } from 'react-responsive'

const styles = {
    sidebar : {
        borderTop : 'none !important',
        borderLeft : 'none !important',
        borderBottom : 'none !important',
        width : '150px !important' 
    },
    pusher : {
        height : '100% !important',
        overflowY : 'auto !important'
    },
    fullWidth : {
        width : 'calc(100% - 150px) !important'
    },
    mobileFullWidth : {
        width : '100% !important'
    },
    iconButton : {
        position: 'fixed', 
        transition : '.5s', 
        zIndex : 999, 
        display : 'flex',
        height : '40px !important',
        width : '40px !important',
        '&:hover' : {
            cursor : 'pointer',
        }
    },
    icon : {
        fontSize : '20px !important',
        margin : 'auto !important'
    },
    negative : {
        color : 'white !important'
    }
}

const Sidebar = ({
    classes,
    children,
    ...props
}) => {

    const [sidebar, setSidebar] = React.useState(true)
    const mobile = useMediaQuery({ maxWidth: 599 })

    const handleCloseSidebar = () => {
        mobile && setSidebar(false)
    }

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }
    
    React.useState(() => {
        handleCloseSidebar()
    }, [])

    return <SemanticUISidebar.Pushable as={Segment} className="w-full">
        
        <div 
            onClick={toggleSidebar} 
            style={{left : sidebar ? 150 : 0}} 
            className={classes.iconButton}
        >
            <Icon className={classNames(
                classes.icon,
                mobile && sidebar && classes.negative
            )} name={sidebar ? 'outdent' : 'indent'}></Icon>
        </div>
        <SemanticUISidebar
            className={classes.sidebar}
            as={Menu}
            animation={mobile ? "overlay" :"push"}
            direction={"left"}
            icon='labeled'
            vertical
            visible={sidebar}
            width='thin'
        >
            <Menu.Item as="div" onClick={handleCloseSidebar}>
                <Link to={"/"} >
                    <Image src='/assets/icons/logo.png' />
                </Link>
                
            </Menu.Item>

            {routes &&
                routes.length > 0 &&
                routes.map(route => route.icon && (
                    <Menu.Item key={route.id} as="div" onClick={handleCloseSidebar}>
                        {route.icon}
                    </Menu.Item>
                )
            )}
            
        </SemanticUISidebar>

        <SemanticUISidebar.Pusher 
            dimmed={mobile && sidebar} 
            className={classNames(
                classes.pusher,
                !mobile && sidebar ? classes.fullWidth : classes.mobileFullWidth
            )}
        >
            {children}
        </SemanticUISidebar.Pusher>
    </SemanticUISidebar.Pushable>
}


export default injectSheet(styles)(
    Sidebar
)

  