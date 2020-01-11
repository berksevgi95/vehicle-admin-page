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
import { Link } from 'react-router-dom'
import routes from '../../configs/routes';

const Header = ({
    horizontal,
    sidebar,
    openSidebar,
    closeSidebar,
    ...props
}) => {

    const handleClickMenuIcon = () => {
        sidebar ? 
            closeSidebar() : 
            openSidebar()
    }

    return horizontal ?
        <Menu stackable>
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

        </Menu> :

        <Menu attached='top' style={{
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none'
        }}>
            <Menu.Item onClick={handleClickMenuIcon}>
                <Icon name="align justify"></Icon>
            </Menu.Item>

            <Menu.Menu position='right'>
                <div className='ui right aligned category search item'>
                    <div className='ui transparent icon input'>
                        <input
                            className='prompt'
                            type='text'
                            placeholder='Search animals...'
                        />
                        <i className='search link icon' />
                    </div>
                    <div className='results' />
                </div>
            </Menu.Menu>
        </Menu>
}


const mapStateToProps = (state, ownProps) => {
    return { ...state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        ...AppActions,
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

