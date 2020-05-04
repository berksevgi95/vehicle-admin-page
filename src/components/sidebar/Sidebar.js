import React from 'react'
import {
    Icon,
    Image,
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
        height : '100%',
        background: '#51beb3',
    },

    logoContainer : {
        height: 60,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
    },

    linkContainer : {
        height: 'calc(100% - 60px)',
        width: '100%',
        overflow: 'auto',
        overflowX: 'hidden'
    },

    link: {
        transition: '.3s',
        width: '100%',
        padding: '1rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        '&:hover' : {
            background: '#429990',
        }
    },

    mobile : {
        position : 'absolute',
        zIndex: 1,
    },

    collapsed : {
        width : 0
    },

    icon: {
        fontSize: '20px !important',
        margin: 'auto !important',

        '&:hover' : {
            cursor: 'pointer'
        }
    },

}

const Sidebar = ({
    classes,
    children,
    ...props
}) => {

    const mobile = useMediaQuery({ maxWidth: 599 })
    const [sidebar, setSidebar] = React.useState(!mobile)

    React.useEffect(() => {
        setSidebar(!mobile)
    }, [mobile])

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className={classNames(classes.root, {
            [classes.collapsed]: !sidebar,
            [classes.mobile]: mobile
        })}>

            <div className={classes.logoContainer}>
                <Link className="h-full" to="/">
                    <Image className="h-full" src='/assets/icons/logo.png' />
                </Link>
                <div onClick={toggleSidebar}>
                    <Icon
                        className={classNames(classes.icon, !sidebar ? "text-black" : "text-white")}
                        name={sidebar ? 'angle left' : 'angle right'}
                    />
                </div>
            </div>

            <div className={classes.linkContainer}>
                {routes &&
                    routes.length > 0 &&
                    routes.map(route => route.icon && (
                        <div key={route.id} className={classes.link}>
                            <Link className="flex" to={route.path}>
                                <div className="mr-2 text-white">
                                    {route.icon}
                                </div>
                                <span className="truncate text-white">
                                    {route.title}
                                </span>
                            </Link>
                        </div>
                    )
                )}
            </div>

        </div>
    )
}

export default injectSheet(styles)(
    Sidebar
)
