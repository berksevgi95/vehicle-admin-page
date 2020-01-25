import React from 'react';
import { List } from 'semantic-ui-react';


// const TreeNode = ({
//     child,
//     ...props
// }) => {
//     return <List.Item>
//         <List.Icon name='angle right' />
//         <List.Content onClick={toggleCollapseNode.bind(this, child)}>
//             <List.Header>{child.name}</List.Header>
//         </List.Content>

//         <div style={{

//             transform: isCollapsed(child) ? 'scaleY(1)' : 'scaleY(0)',
//             transformOrigin: 'top',
//             transition: 'transform .3s ease',
//             height: isCollapsed(child) ? 'auto' : '0',
//             overflow: 'hidden'
//         }}>
//             {child.children && <Tree children={child.children} />}
//         </div>
//     </List.Item>
// }

const Tree = ({
    children,
    ...props
}) => {
    
    const [collapsed, setCollapsed] = React.useState([])

    const toggleCollapseNode = (child, e) => {
        child.children && 
        child.children.length > 0 &&
        collapsed.filter(item => item.name === child.name).length === 0 ?
            setCollapsed([...collapsed, child]) : 
            setCollapsed([...collapsed.filter(item => item.name !== child.name)])
    }

    const isCollapsed = (child) => collapsed.filter(item => item.name === child.name).length !== 0

    

    return <List style={{marginLeft : 15}}>
        {children &&
            children.length > 0 &&
            children.map((child, i) => (
                <List.Item key={i}>
                    <List.Icon name='angle right' />
                    <List.Content onClick={toggleCollapseNode.bind(this, child)}>
                        <List.Header>{child.name}</List.Header>
                    </List.Content>

                    <div style={{

                        transform: isCollapsed(child) ? 'scaleY(1)' : 'scaleY(0)',
                        transformOrigin: 'top',
                        transition: 'transform .3s ease',
                        height: isCollapsed(child) ? 'auto' : '0',
                        overflow: 'hidden'
                    }}>
                        {child.children && <Tree children={child.children} />}
                    </div>
                </List.Item>
            ))
        }
    </List>
}

export default Tree