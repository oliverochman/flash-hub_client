import React, { Component } from 'react';
import { Menu, Header, Dropdown } from 'semantic-ui-react';
import '../styling/customize.css';

class Navbar extends Component {
  state = { activeItem: 'signup' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Header position='left' id='header' style={{ color: 'brown', fontSize: '3rem', fontFamily: 'Lexend Giga' }}>
          Flashcard Hub
          </Header>
        <Header as='h3' style={{ color: 'orange', fontFamily: 'Lexend Giga' }} >
          Fun way to learn
        </Header>
        <Menu.Menu position='right'>
          <Dropdown item text='Categories' style={{ color: '#79AD41' }} >
            <Dropdown.Menu>
              <Dropdown.Item>Ruby</Dropdown.Item>
              <Dropdown.Item>JavaScript</Dropdown.Item>
              <Dropdown.Item>Home</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item style={{ color: 'orange' }}
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          >
            Log In
          </Menu.Item>
          <Menu.Item style={{ color: '#E58869' }}
            name='signup'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
          >
            Sign Up
          </Menu.Item>

        </Menu.Menu>
      </Menu>

    )
  }
}

export default Navbar;

