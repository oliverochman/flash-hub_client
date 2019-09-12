import React, { Component } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import '../styling/customize.css';
import LoginForm from './LoginForm';
import PresentSavedFlashcards from './PresentSavedFlashcards';
import { connect } from 'react-redux';

class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let loginActions;
    let userSavedFlashcards;
    const { activeItem } = this.state;
    debugger;

    if (this.props.currentUser.isSignedIn === false) {
      loginActions = (
        <>
          <Menu.Item>
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
    } else {
      userSavedFlashcards = (
        <>
          <Menu.Item>
            <PresentSavedFlashcards />
          </Menu.Item>
        </>
      )
    }

    return (
      <Menu id='navbar'>
        <Header position='left' id='header' style={{ color: 'brown', fontSize: '2rem', fontFamily: 'Lexend Giga' }}>
          Flashcard Hub
        </Header>
        <Menu.Menu position='right'>
          {loginActions}
          {userSavedFlashcards}
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


