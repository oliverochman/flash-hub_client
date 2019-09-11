import React, { Component } from 'react';
import { Menu, Header, Container } from 'semantic-ui-react';
import '../styling/customize.css';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import AlertMessage from './AlertMessage';

class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let loginActions;
    let flashMessage;
    const { activeItem } = this.state;

    if (this.props.showFlash === true) {
      flashMessage = <AlertMessage />;
    }

    if (this.props.currentUser.isSignedIn === false) {
      loginActions = (
        <>
          <Menu.Item style={{ color: 'orange' }}
            id='login-button'
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
            >
              <LoginForm />
            </Menu.Item>
            <Menu.Item style={{ color: '#E58869' }}
              name='signup'
              active={activeItem === 'signup'}
              onClick={this.handleItemClick}
            >
              Sign Up
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
        <Container>{flashMessage}</Container>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser,
    // showFlash: state.flashes.showFlash
  };
};
export default connect(
  mapStateToProps
)(Navbar);


