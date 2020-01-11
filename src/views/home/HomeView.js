import React from 'react'
import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

const HomeView = ({
    ...props
}) => {
    return <Segment basic>
        <Header as='h3'>Application Content</Header>
        <Image src='/images/wireframe/paragraph.png' />
    </Segment>
}

export default HomeView