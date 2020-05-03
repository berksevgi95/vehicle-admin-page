import React from 'react'
import * as AppActions from '../../store/app.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import routes from '../../configs/routes';
import injectSheet from 'react-jss'
import { Input } from 'bs-ui-components';
import { Image } from 'semantic-ui-react';
import classNames from 'classnames';

const styles = {
    header :  {
        height: 60,
        width: '100%',
        padding: '1rem',
        borderBottom: '1px solid #CCCCCC',
        display: 'flex',
        alignItems: 'center'
    },
}


const Header = ({
    classes,
    horizontal,
    sidebar,
    openSidebar,
    closeSidebar,
    history,
    ...props
}) => {

    const handleNavigateSearch = (e) => {
        history.push(`/search/${e.target.value || ""}`)
    }

    return horizontal ? (
        <header className={classNames(classes.header, "justify-between")}>
            <div className="flex">
                <Link className="mr-3" to="/">
                    <Image size={"mini"} src='assets/icons/logo.png' />
                </Link>
                {routes &&
                    routes.length > 0 &&
                    routes.map(route => route.icon && (
                        <div className="mx-3 flex items-center">
                            <Link className="flex" to={route.path}>
                                <div className="mr-2">
                                    {route.icon}
                                </div>
                                <span className="truncate">
                                    {route.title}
                                </span>
                            </Link>
                        </div>
                    )
                )}
            </div>
            <Input onChange={handleNavigateSearch} placeholder="Search" />
        </header>
    ) : (
        <header className={classNames(classes.header, "justify-end")}>
            <Input onChange={handleNavigateSearch} placeholder="Search"/>
        </header>
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

export default injectSheet(styles)(
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(Header)
    )
)
