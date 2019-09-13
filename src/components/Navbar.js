import React, { Component } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import '../styling/customize.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import PresentSavedFlashcards from './PresentSavedFlashcards';
import { connect } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';



class Navbar extends Component {
  state = {}

  render() {
    let loginActions;
    let userSavedFlashcards;

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
    } else {
      userSavedFlashcards = (
        <>
          <Menu.Item>
            <Modal 
              centered={false}
              id='modal'
              trigger={
                <Button id='my-flashcards-button'>
                  My Flashcards
                </Button>
              }>
                <PresentSavedFlashcards />
              </Modal>
          </Menu.Item>
          <Menu.Item>
            Log Out
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
    currentUser: state.reduxTokenAuth.currentUser
  };
};

export default connect(
  mapStateToProps
)(Navbar);


