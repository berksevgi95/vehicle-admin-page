import React from 'react'
import injectSheet from 'react-jss'
import { 
    Segment, 
    Menu, 
    Dropdown, 
    Icon
} from 'semantic-ui-react'

const styles = {
    '@global' : {
        'i' : {
            margin : '0px !important'
        }
    },
    segment : {
        width : '100%', 
        height : '100%', 
        padding : '0px !important'
    }, 
    graphContainer : {
        padding : 10,
        height : 'calc(100% - 40px)'
    },
    menuContainer: {
        height : '40px !important',
        borderTop  : 'none !important',
    }
}

const Graph  = ({
    classes,
    children,
    ...props
}) => {
    return <Segment className={classes.segment}>
        <Menu className={classes.menuContainer} attached='top'>
            <Dropdown item icon='ellipsis horizontal' simple>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Icon name='dropdown' />
                        <span className='text'>New</span>

                        <Dropdown.Menu>
                            <Dropdown.Item>Document</Dropdown.Item>
                            <Dropdown.Item>Image</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>Open</Dropdown.Item>
                    <Dropdown.Item>Save...</Dropdown.Item>
                    <Dropdown.Item>Edit Permissions</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Export</Dropdown.Header>
                    <Dropdown.Item>Share</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu>
        <div className={classes.graphContainer}>
            {children}
        </div>
    </Segment>
}

export default injectSheet(styles)(Graph);

