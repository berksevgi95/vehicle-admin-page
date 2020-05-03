import React from 'react'
import { bindActionCreators } from 'redux';
import * as AppActions from '../../store/app.actions';
import { connect } from 'react-redux'
import { Select } from 'bs-ui-components';

const SettingsView = ({
    layout,
    changeLayout,
    ...props
}) => {
    return <div className="w-full h-full p-4">
        <h3 className="text-2xl">Settings</h3>

        <Select
            value={layout}
            options={[{
                label: 'Vertical Layout',
                value: 'layout1'
            }, {
                label: 'Horizontal Layout',
                value: 'layout2'
            }]}
            onChange={(e) => changeLayout(e.target.value)}
        />
        
    </div>
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