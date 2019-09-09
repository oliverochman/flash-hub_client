import React, { Component } from 'react';
import { Menu, Header, Dropdown } from 'semantic-ui-react';

class Navbar extends Component {
  state = { activeItem: 'login' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{ height: 60 }} widths={8}>
        <Header id="header" style={{ color: '#79AD41', fontSize: "4rem" }}>
          Flashcard Hub
        </Header>

        <Menu.Item
          position='right'
          name='Log In'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          position='right'
          name='Sign Up'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
        />

        <Dropdown position="right" text='Display Options'>
          <Dropdown.Menu>
            <Dropdown.Header>Text Size</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


      </Menu>


    )
  }
}

export default Navbar;