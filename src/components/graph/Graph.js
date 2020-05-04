// import React from 'react'
// import injectSheet from 'react-jss'
// import { 
//     Segment, 
//     Menu, 
//     Dropdown, 
//     Icon
// } from 'semantic-ui-react'

// const styles = {
//     '@global' : {
//         'div[role="listbox"] i' : {
//             margin : '0px !important'
//         }
//     },
//     segment : {
//         width : '100%', 
//         height : '100%', 
//         padding : '0px !important'
//     }, 
//     graphContainer : {
//         padding : 10,
//         height : 'calc(100% - 40px)'
//     },
//     menuContainer: {
//         height : '40px !important',
//         borderTop  : 'none !important',
//     }
// }

// const Graph  = ({
//     classes,
//     children,
//     ...props
// }) => {
//     return <Segment className={classes.segment}>
//         <Menu className={classes.menuContainer} attached='top'>
//             <Dropdown item icon='ellipsis horizontal' simple>
//                 <Dropdown.Menu>
//                     <Dropdown.Item>
//                         <Icon name='dropdown' />
//                         <span className='text'>New</span>

//                         <Dropdown.Menu>
//                             <Dropdown.Item>Document</Dropdown.Item>
//                             <Dropdown.Item>Image</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown.Item>
//                     <Dropdown.Item>Open</Dropdown.Item>
//                     <Dropdown.Item>Save...</Dropdown.Item>
//                     <Dropdown.Item>Edit Permissions</Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Header>Export</Dropdown.Header>
//                     <Dropdown.Item>Share</Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>
//         </Menu>
//         <div className={classes.graphContainer}>
//             {children}
//         </div>
//     </Segment>
// }

// export default injectSheet(styles)(Graph);



import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles = {
    graphContainer : {
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

