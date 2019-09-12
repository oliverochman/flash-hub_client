import React, { Component } from 'react';
import { Button, Form, Modal, Container } from 'semantic-ui-react';
import { signInUser } from '../state/actions/reduxTokenAuthConfig';
import { connect } from 'react-redux';
import AlertMessage from './AlertMessage';

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
      .then()
      .catch(error => {
        console.log(error);
        this.props.dispatchFlash(error.response.data.errors, "error");
      }
  )};

  render() {
    let flashMessage;

    if (this.props.showFlash === true) {
      flashMessage = <AlertMessage />;
    }
    return (
      <>
      <Modal id='modal' basic size='small' trigger={<Button id='login-button'>Log In</Button>}>
        <Container>{flashMessage}</Container>
          <h1 style={{ fontSize: '4rem', textAlign: 'center', fontFamily: 'Londrina Shadow' }}>
            Log In
          </h1>
            <Form id='login-form' onSubmit={this.loginHandler}>
              <Form.Field>
                <label id='email-title'>E-mail</label>
                <input
                  id='email'
                  placeholder='E-mail'
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </Form.Field>
              <Form.Field>
                <label id='password-title'>Password</label>
                <input
                  id='password' 
                  placeholder='Password' 
                  type='password'
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </Form.Field>
            <Button fluid color='orange' type='submit' id='submit-login-form'>Log In</Button>
            </Form>
        </Modal>
      </>
    )
  }
};

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser,
    showFlash: state.flashes.showFlash
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