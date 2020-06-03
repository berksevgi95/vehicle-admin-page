import React from 'react'
import * as AccidentsActions from './store/accidents.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { Input, Button, BSTheme } from 'bs-ui-components';
import { Formik } from 'formik';
import _ from 'lodash';
import messages from '../../configs/i18n'
import { FormattedMessage } from 'react-intl';

const styles = {

    '@keyframes opacity': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },

    '@keyframes width': {
        from: { right: -200 },
        to: { right: 0 }
    },

    filterArea : {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        animation: '$opacity .25s',
        background: 'rgba(0, 0, 0, 0.38)'
    },

    filterBar : {
        right: 0,
        position: 'absolute',
        width: 200,
        height: '100%',
        background: 'white',
        animation: '$width .25s'
    },

    inputArea : {
        width: '100% !important',
        minWidth: 'inherit'
    }
}


const AccidentsViewFilterForm = ({
    classes,
    lang,
    accidentFilters,
    closeAccidentFilterbar,
    addAccidentFilter,
}) => {

    const handleStopPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={classes.filterArea} onClick={closeAccidentFilterbar}>
            <div className={classes.filterBar} onClick={handleStopPropagation}>
                <Formik
                    initialValues={(
                        accidentFilters && Object.assign(
                            {},
                            ...accidentFilters.map((filterObj) => ({
                                [filterObj.field]: filterObj.value 
                            }))
                        )
                    ) || {
                        description: '',
                        // vehicle1: '',
                        // vehicle2: '',
                        // date: '',
                        // time: ''
                    }}
                    onSubmit={(values, formikHelpers) => {
                        const filterObj = _.pickBy(values);
                        addAccidentFilter(
                            !_.isEmpty(filterObj, true) ? 
                                Object.keys(filterObj).map(f => ({
                                    label: messages[lang][`accidents.${f}`],
                                    field: f,
                                    value: values[f]
                                })) : 
                                null
                        )
                        closeAccidentFilterbar()
                    }}
                >
                    {({
                        values,
                        isSubmitting,
                        handleChange,
                        handleSubmit,
                    }) => {
                        return (
                            <form className="p-4" onSubmit={handleSubmit}>
                                <h3 className="text-xl mb-4">
                                    <FormattedMessage id="accidents.filter" />
                                </h3>
                                
                                <div className="mb-4">
                                    <Input
                                        id="description"
                                        name="description"
                                        type="text"
                                        value={values.description}
                                        onChange={handleChange}
                                        className={classes.inputArea}
                                    >
                                        <FormattedMessage id="accidents.description" />
                                    </Input>
                                </div>
                                {/* <div className="mb-4">
                                    <Input
                                        id="modelName"
                                        name="modelName"
                                        type="text"
                                        value={values.modelName}
                                        onChange={handleChange}
                                        placeholder="Ex. Focus, Golf, etc."
                                        className={classes.inputArea}
                                    >
                                        <FormattedMessage id="vehicles.modelName" />
                                    </Input>
                                </div>
                                <div className="mb-4">
                                    <Input
                                        id="year"
                                        name="year"
                                        type="number"
                                        value={values.year}
                                        onChange={handleChange}
                                        placeholder="Ex. 2010"
                                        className={classes.inputArea}
                                    >
                                        <FormattedMessage id="vehicles.year" />
                                    </Input>
                                </div>
                                <div className="mb-8">
                                    <Input
                                        id="km"
                                        name="km"
                                        type="number"
                                        value={values.km}
                                        placeholder="Ex. 512000"
                                        onChange={handleChange}
                                        className={classes.inputArea}
                                    >
                                        <FormattedMessage id="vehicles.km" />
                                    </Input>
                                </div> */}
                                
                                <Button
                                    className="w-full"
                                    type="submit"
                                    disabled={isSubmitting}
                                    theme={BSTheme.SECONDARY}
                                >
                                    Submit
                                </Button>

                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        ...state.accidents,
        ...state.app
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        ...AccidentsActions,
    }, dispatch);
}

export default injectSheet(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AccidentsViewFilterForm)
)