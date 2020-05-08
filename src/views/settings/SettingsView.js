import React from 'react'
import { bindActionCreators } from 'redux';
import * as AppActions from '../../store/app.actions';
import { connect } from 'react-redux'
import { Select } from 'bs-ui-components';
import injectSheet from 'react-jss'

const styles = {
    tag : {
        position: 'absolute',
        top: -10,
        left: 10,
        paddingLeft: 5,
        paddingRight: 5,
        background: 'white'
    },

    select : {
        width: 200
    }
}

const SettingsView = ({
    layout,
    changeLayout,
    classes,
    ...props
}) => {
    return (
        <div className="fadein-animation p-4">
            <h3 className="text-2xl">Settings</h3>
            <div className="border border-gray-300 border-solid p-4 py-6 my-8 relative">
                <span className={classes.tag}>
                    Layout Settings
                </span>
                <Select
                    className={classes.select}
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
        </div>
    )
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
)(injectSheet(styles)(
    SettingsView
))