import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { signOutUser } from '../state/actions/reduxTokenAuthConfig';
import AlertMessage from './AlertMessage'

class Logout extends Component {

  signOut = (e) => {
    e.preventDefault();
    const { signOutUser } = this.props;
    signOutUser()
      .then(response => {
        debugger;
        this.props.dispatchFlash(
          `You have successfully logged out.`,
        );
      })
  };

  render() {
    const { signOut } = this;
    let flashMessage;

    if (this.props.showFlash === true) {
      flashMessage = <AlertMessage />;
    }
    return (
      <>
      <Menu.Item
        id="logout-button"
        onClick={signOut}
      >
        Log Out
      </Menu.Item>
    </>
    )
  }

  
}

const mapStateToProps = (state) => {
  return {
    state: state,
    currentUser: state.reduxTokenAuth.currentUser
  }
}

const mapDispatchToProps = {
  dispatchFlash: (message) => ({
    type: "SHOW_FLASH_MESSAGE",
    payload: { flashMessage: message }
  }),
  signOutUser
};

export default(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logout));
