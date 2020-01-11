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
import { bindActionCreators } from 'redux';
import * as AppActions from '../../store/app.actions';
import { connect } from 'react-redux'

const SettingsView = ({
    layout,
    changeLayout,
    ...props
}) => {
    return <Segment basic className="view">
        <Header as='h3'>Application Content</Header>
        <Image src='/images/wireframe/paragraph.png' />
        <button onClick={() => {
            layout === 'layout1' ?
                changeLayout('layout2') : 
                changeLayout('layout1')

        }}>asdlşaks</button>
    </Segment>
}


const mapStateToProps = (state, ownProps) => {
    return { ...state.app }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        ...AppActions,
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsView)