import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles = {
    root : {
        marginLeft : '15px !important', 
        padding : '2.5px !important'
    },
    list : {
        transform: 'scaleY(0)',
        transformOrigin: 'top',
        transition: 'transform .3s ease',
        height: '0',
        overflow: 'hidden'
    },
    expanded : {
        transform : 'scaleY(1)',
        height : 'auto'
    },

    node : {
        paddingTop : '2.5px !important',
        paddingBottom : '2.5px !important',
        boxShadow : 'none',
        transition : '.3s',
        borderRadius: 2
    },
    hover : {
        boxShadow: '0 0 0 1px rgba(34,36,38,.5)' ,
    }
}

const Tree = ({
    children,
    ...props
}) => {
    
    const [collapsed, setCollapsed] = React.useState([])
    const [hover, setHover] = React.useState(null)

    const toggleCollapseNode = (child, e) => {
        child.children && 
        child.children.length > 0 &&
        collapsed.filter(item => item.name === child.name).length === 0 ?
            setCollapsed([...collapsed, child]) : 
            setCollapsed([...collapsed.filter(item => item.name !== child.name)])
    }

    const isCollapsed = (child) => collapsed.filter(item => item.name === child.name).length !== 0

    const drag = (node, e) => {
        e.dataTransfer.setData("node", JSON.stringify(node));
    }

    const allowDrop = (node, e) => {
        e.preventDefault();
        setHover(node.name)
    }

    const passDrop = (e) => {
        setHover(null)
    }

    const drop = (node, e) => {
        e.preventDefault();
        setHover(null)
        var data = JSON.parse(e.dataTransfer.getData("node"));
        console.log(node, data)
    }

    return <List className={props.classes.root}>
        {children &&
            children.length > 0 &&
            children.map((child, i) => (
                <List.Item key={i}
                    className={classNames(props.classes.node, {
                        [props.classes.hover] : hover === child.name
                    })}
                >
                    <div draggable
                        onDrop={drop.bind(this, child)} 
                        onDragOver={allowDrop.bind(this, child)}
                        onDragLeave={passDrop}
                        onDragStart={drag.bind(this, child)} 
                        className="flex items-center my-1" 
                        onClick={toggleCollapseNode.bind(this, child)}
                    >
                        <List.Icon name='angle right' />
                        <List.Header>{child.name}</List.Header>
                    </div>
                    <div className={classNames(props.classes.list, {
                        [props.classes.expanded] : isCollapsed(child)
                    })}>
                        {child.children && <Tree {...props} children={child.children} />}
                    </div>
                </List.Item>
            ))
        }
    </List>
}

export default injectSheet(styles)(Tree)