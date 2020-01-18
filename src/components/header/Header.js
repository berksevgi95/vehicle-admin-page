import React from 'react'
import {
    Icon,
    Menu,
    Dropdown,
    Image
} from 'semantic-ui-react'
import * as AppActions from '../../store/app.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import routes from '../../configs/routes';
import injectSheet from 'react-jss'
import { DebounceInput } from 'react-debounce-input';

const styles = {
    header :  {
        margin : '0px !important',
        height : '65px !important'
    },
    horizontalHeader : {
        borderTop: 'none !important',
        borderLeft: 'none !important',
        borderRight: 'none !important',
    }
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

    return horizontal ?
        <Menu stackable className={classes.header}>
            <Menu.Item>
                <Link to="/">
                    <Image size={"mini"} src='assets/icons/logo.png' />
                </Link>
            </Menu.Item>

            {routes &&
                routes.length > 0 &&
                routes.map(route => route.icon && (
                    <Menu.Item>
                        {route.icon}
                    </Menu.Item>
                )
            )}

            <div className='ui right aligned category search item'>
                <div className='ui transparent icon input'>
                    <DebounceInput
                        minLength={2}
                        placeholder={"Search"}
                        debounceTimeout={500}
                        onChange={handleNavigateSearch}
                    />

                    <i className='search link icon' onClick={handleNavigateSearch} />
                </div>
                <div className='results' />
            </div>
        </Menu> :

        <Menu attached='top' className={classes.horizontalHeader}>
            <Menu.Menu position='right'>
                <div className='ui right aligned category search item'>
                    <div className='ui transparent icon input'>
                        <DebounceInput
                            minLength={2}
                            placeholder={"Search"}
                            debounceTimeout={500}
                            onChange={handleNavigateSearch} 
                        />

                        <i className='search link icon' onClick={handleNavigateSearch}/>
                    </div>
                    <div className='results' />
                </div>
            </Menu.Menu>
        </Menu>
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
