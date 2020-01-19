import React from 'react'
import {
    Header,
    Segment,
    Select,
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
        <Header as='h3'>Settings</Header>
        <Segment id="layout">
            <Header as='h6'>Layout</Header>
            <Select value={layout} placeholder='Select layout' options={[{ 
                key: 'layout1',
                value: 'layout1', 
                text: 'Vertical Layout', 
                onClick: (e) => changeLayout("layout1")
            },{ 
                key: 'layout2',
                value: 'layout2', 
                text: 'Horizontal Layout', 
                onClick: (e) => changeLayout("layout2")
            }]} />
        </Segment>
        
        {/* <Segment id="language">
            <Header as='h6'>Language</Header>

        </Segment> */}
        
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