import React from 'react'
import {
    Icon,
    Menu,
    Image,
    Sidebar as SemanticUISidebar,
} from 'semantic-ui-react'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import routes from '../../configs/routes';
import { useMediaQuery } from 'react-responsive'

const styles = {

    root : {
        position : 'relative',
        transition : '.3s',
        width : 150,
        height : '100%'
    },

    mobile : {
        position : 'absolute'
    },

    collapsed : {
        width : 0
    },

    sidebar: {
        borderTop: 'none !important',
        borderLeft: 'none !important',
        borderBottom: 'none !important',
        width: '100% !important',
        position : 'relative !important',
        overflow : 'hidden !important'
    },

    iconButton: {
        position: 'absolute',
        zIndex: 999,
        display: 'flex',
        height: 40,
        width: 40,
        right : -40,
        '&:hover': {
            cursor: 'pointer',
        }
    },
    
    icon: {
        fontSize: '20px !important',
        margin: 'auto !important'
    },

    background : {
        zIndex: 1,
        transition : '.3s',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        background: 'rgba(0, 0, 0, 0.42)',
    }
}

const Sidebar = ({
    classes,
    children,
    ...props
}) => {

    const mobile = useMediaQuery({ maxWidth: 599 })
    const [sidebar, setSidebar] = React.useState(!mobile)

    const handleCloseSidebar = () => {
        mobile && setSidebar(false)
    }

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }

    return <div className={classNames(classes.root, {
            [classes.collapsed] : !sidebar,
            [classes.mobile] : mobile
        })}>

        <div onClick={toggleSidebar} className={classes.iconButton}>
            <Icon className={classes.icon} name={sidebar ? 'angle left' : 'angle right'}></Icon>
        </div>
        
        <SemanticUISidebar
            className={classes.sidebar}
            as={Menu}
            direction={"left"}
            icon='labeled'
            vertical
            visible
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
        {mobile && sidebar &&
            <div onClick={handleCloseSidebar} className={classes.background}/>
        }
    </div>
}

export default injectSheet(styles)(
    Sidebar
)
