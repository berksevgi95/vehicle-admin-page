import React from 'react'
import { bindActionCreators } from 'redux';
import * as AppActions from '../../store/app.actions';
import { connect } from 'react-redux'
import { Select } from 'bs-ui-components';
import injectSheet from 'react-jss'
import { FormattedMessage } from 'react-intl';

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
    lang,
    changeLayout,
    changeLanguage,
    classes,
}) => {

    const handleChangeLayout = (e) => {
        changeLayout(e.target.value)
    }

    const handleChangeLanguage = (e) => {
        changeLanguage(e.target.value)
    }
    
    return (
        <div className="fadein-animation p-4">
            <h3 className="text-2xl">
                <FormattedMessage id="settings" />
            </h3>
            <div className="border border-gray-300 border-solid p-4 py-6 my-8 relative">
                <span className={classes.tag}>
                    <FormattedMessage id="settings.layout" />
                </span>
                <Select
                    className={classes.select}
                    value={layout}
                    options={[{
                        label: <FormattedMessage id="settings.layout.vertical" />,
                        value: 'layout1'
                    }, {
                        label: <FormattedMessage id="settings.layout.horizontal" />,
                        value: 'layout2'
                    }]}
                    onChange={handleChangeLayout}
                />
            </div>
            <div className="border border-gray-300 border-solid p-4 py-6 my-8 relative">
                <span className={classes.tag}>
                    <FormattedMessage id="settings.language" />
                </span>
                <Select
                    className={classes.select}
                    value={lang}
                    options={[{
                        label: 'English',
                        value: 'en'
                    }, {
                        label: 'Türkçe',
                        value: 'tr'
                    }]}
                    onChange={handleChangeLanguage}
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