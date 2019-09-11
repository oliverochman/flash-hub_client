import React, { Component } from 'react';
import { Menu, Button, Form, Modal, Header } from 'semantic-ui-react';
import { userLogin } from 'redux-token-auth';
import { connect } from 'react-redux';

class LoginForm extends Component {
  state = {
    email: [],
    password: []
  }


  render() {
    
    return (
      <>
        <Modal 
          trigger={<Menu.Item 
            style={{ color: 'orange' }}
            id='login-button'
            >
            Log In
            </Menu.Item>}
          >
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
      </>
    )
  }
};

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

export default connect(
  mapStateToProps,
)(LoginForm);