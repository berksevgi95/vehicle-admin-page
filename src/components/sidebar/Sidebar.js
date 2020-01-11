import React from 'react'
import {
    Icon,
    Menu,
    Sidebar as SemanticUISidebar,
} from 'semantic-ui-react'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'


const styles = {
    sidebar: {
        // width: '150px !important',
        position: 'relative !important'
    },
    '@media screen and (max-width: 599px)': {
        sidebar: {
            position: 'absolute !important'
        }
    }
}

const Sidebar = ({
    classes,
    ...props
}) => {
    return <SemanticUISidebar
        className={classes.sidebar}
        as={Menu}
        animation={"overlay"}
        direction={"left"}
        icon='labeled'
        vertical
        visible={true}
        width='thin'
    >
        <Menu.Item>
            <Link to="/vehicles">
                <Icon name='home' />
                Home
        </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/vehicles/detail">
                <Icon name='home' />
                Home
        </Link>
        </Menu.Item>
    </SemanticUISidebar>
}

export default injectSheet(styles)(Sidebar)