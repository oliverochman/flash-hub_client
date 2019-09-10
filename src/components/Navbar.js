import React, { Component } from 'react';
import { Menu, Header, Modal, Button, Form } from 'semantic-ui-react';
import '../styling/customize.css';

class Navbar extends Component {
  state = { }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu id='navbar'>
        <Header position='left' id='header' style={{ color: 'brown', fontSize: '2rem', fontFamily: 'Lexend Giga' }}>
          Flashcard Hub
          </Header>
        <Menu.Menu position='right'>

        <Modal trigger={
          <Menu.Item style={{ color: 'orange' }}
          id='login-button'
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
          >
            Log In
          </Menu.Item>}>
          <Header>Log In</Header>
          <Form id='login-form'>
            <Form.Field>
              <label>E-mail</label>
              <input id='email' placeholder='E-mail' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input id='password' placeholder='Password' type='password' />
            </Form.Field>
            <Button id='submit-login-form' type='submit'>Log In</Button>
          </Form>
        </Modal>
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

