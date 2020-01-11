import React from 'react'
import {
    Icon,
    Menu,
    Dropdown
} from 'semantic-ui-react'

const Header = ({
    horizontal,
    ...props
}) => {
    return horizontal ?
        <Menu stackable>
            <Menu.Item>
                <img src='/logo.png' />
            </Menu.Item>

            <Menu.Item
                name='features'
                // active={activeItem === 'features'}
            //   onClick={this.handleItemClick}
            >
                Features
        </Menu.Item>

            <Menu.Item
                name='testimonials'
                // active={activeItem === 'testimonials'}
            //   onClick={this.handleItemClick}
            >
                Testimonials
        </Menu.Item>

            <Menu.Item
                name='sign-in'
                // active={activeItem === 'sign-in'}
            //   onClick={this.handleItemClick}
            >
                Sign-in
        </Menu.Item>
        </Menu> :

        <Menu attached='top' style={{
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none'
        }}>
            <Dropdown item icon='wrench' simple>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Icon name='dropdown' />
                        <span className='text'>New</span>

                        <Dropdown.Menu>
                            <Dropdown.Item>Document</Dropdown.Item>
                            <Dropdown.Item>Image</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>Open</Dropdown.Item>
                    <Dropdown.Item>Save...</Dropdown.Item>
                    <Dropdown.Item>Edit Permissions</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Export</Dropdown.Header>
                    <Dropdown.Item>Share</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

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

export default Header;