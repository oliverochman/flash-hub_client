import React, { Component } from 'react';
import { Menu, Button, Form, Modal, Header } from 'semantic-ui-react';
import { signInUser } from '../state/actions/reduxTokenAuthConfig';
import { connect } from 'react-redux';

class LoginForm extends Component {
  state = {
    email: [],
    password: []
  }

  loginHandler = e => {
    e.preventDefault();
    const { signInUser } = this.props;
    const { email, password } = this.state;
    signInUser({ email, password })
    try {
    } catch (error) {
      this.props.dispatchFlash(error.response.data.errors[0], "error");
    }
  };

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
          <Form id='login-form' onSubmit={this.loginHandler}>
            <Form.Field>
              <label>E-mail</label>
              <input 
                id='email'
                placeholder='E-mail'
                onChange={e => this.setState({ email: e.target.value })}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input 
                id='password' 
                placeholder='Password' 
                type='password'
                onChange={e => this.setState({ password: e.target.value })}
              />
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

const mapDispatchToProps = {
  dispatchFlash: (message, status) => ({
    type: "SHOW_FLASH_MESSAGE",
    payload: { flashMessage: message, status: status }
  }),
  signInUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);