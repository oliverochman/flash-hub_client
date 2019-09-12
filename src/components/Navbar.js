import React, { Component } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import '../styling/customize.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';

class Navbar extends Component {
  state = {}

  render() {
    let loginActions;

    if (this.props.currentUser.isSignedIn === false) {
      loginActions = (
        <>
          <Menu.Item>
            <LoginForm />
          </Menu.Item>
          <Menu.Item>
            <SignupForm />
          </Menu.Item>
        </>
      ); 
    };

    return (
      <Menu id='navbar'>
        <Header position='left' id='header' style={{ color: 'brown', fontSize: '2rem', fontFamily: 'Lexend Giga' }}>
          Flashcard Hub
        </Header>
        <Menu.Menu position='right'>
          {loginActions}
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser,
  };
};

export default connect(
  mapStateToProps
)(Navbar);


