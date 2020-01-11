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
import * as AppActions from '../../store/app.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import classNames from 'classnames'
import routes from '../../configs/routes';

const styles = {
    sidebar : {
        borderTop : 'none !important',
        borderLeft : 'none !important',
        borderBottom : 'none !important'
    },
    pusher : {
        height : '100% !important',
        overflowY : 'auto !important'
    },
    sidebarWidth : {
        width : '150px !important' 
    },
    fullWidth : {
        width : 'calc(100% - 150px) !important'
    },
    mobileFullWidth : {
        width : '100% !important'
    }
}

const Sidebar = ({
    classes,
    children,
    sidebar,
    openSidebar,
    closeSidebar,
    ...props
}) => {

    const [mobile, setMobile] = React.useState(false)

    React.useState(() => {
        if(window.innerWidth < 599) {
            setMobile(true)
            closeSidebar()
        }
        window.addEventListener('resize', () => {
            setMobile(window.innerWidth < 599) 
            window.innerWidth < 599 ? 
                closeSidebar():
                openSidebar()
        })
    }, [])

    const handleCloseSidebar = () => {
        mobile && closeSidebar()
    }

    return <SemanticUISidebar.Pushable as={Segment} className="w-full">
        <SemanticUISidebar
            className={classNames(classes.sidebar, classes.sidebarWidth)}
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
                    <Image src='assets/icons/logo.png' />
                </Link>
                
            </Menu.Item>

            {routes &&
                routes.length > 0 &&
                routes.map(route => route.icon && (
                    <Menu.Item as="div" onClick={handleCloseSidebar}>
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

const mapStateToProps = (state, ownProps) => {
    return { ...state.app }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        ...AppActions,
    }, dispatch);
}

export default injectSheet(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Sidebar)
)

  