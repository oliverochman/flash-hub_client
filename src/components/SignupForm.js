import React, { Component } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import { registerUser } from '../state/actions/reduxTokenAuthConfig';
import { connect } from 'react-redux';
import '../styling/customize.css';

class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    userSaved: false
  }

  signupHandler = e => {
    e.preventDefault();
    const { registerUser } = this.props;
    const {
      email, 
      password, 
      password_confirmation
    } = this.state 
    registerUser({ 
      email, 
      password, 
      password_confirmation
    }) 
    .then((response) => {
      this.setState({
        userSaved: true,
      })
    })
    .catch(error => {
      debugger;
      console.log("errors");
  });
};

  render() {
    return (
      <>
        <Modal id='signup-modal' basic size='small' trigger={<Button id='signup-button'>Sign Up</Button>}>
{/*       <Container>{flashMessage}</Container> */}
        <h1 style={{ fontSize: '4rem', textAlign: 'center', fontFamily: 'Londrina Shadow' }}>
          Sign Up
        </h1>
          <Form id='signup-form' onSubmit={e => this.signupHandler(e)}>
            <Form.Field>
              <label id='email-title'>E-mail</label>
              <input
                id='email'
                placeholder='E-mail'
                onChange={e => this.setState({ email: e.target.value })}
              />
            </Form.Field>
            <Form.Field>
              <label id='password-title'>Password</label>
              <input
                id='password' 
                placeholder='Password' 
                type='password'
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Form.Field>
            <Form.Field>
              <label id='password-title'>Password confirmation</label>
              <input
                id='password_confirmation' 
                placeholder='Password confirmation' 
                type='password'
                onChange={e => this.setState({ password_confirmation: e.target.value })}
              />
            </Form.Field>
          <Button fluid color='orange' type='submit' id='submit-signup-form'>Sign Up</Button>
          </Form>
      </Modal>
    </>
    )
  };
};

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

export default connect(
   mapStateToProps,
  { registerUser },
)(SignupForm);
