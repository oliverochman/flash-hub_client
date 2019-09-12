import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { signOutUser } from "../state/actions/reduxTokenAuthConfig";

class Logout extends Component {
  render () {
    const { signOut } = this
    return(
      <>
        <Button
          id='logout-button'
          onClick={signOut}>

        </Button>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps,
  { signOutUser }
)(Logout);