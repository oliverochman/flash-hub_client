import React from 'react';
import FlashMessage from 'react-flash-message';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

const AlertMessage = (props) => {
  let status = props.flashes.status
  return (
    <FlashMessage duration={5000} >
      <Message id='flash' color={status === 'error' ? 'red' : 'green'}>{props.flashes.flashMessage}</Message>
    </FlashMessage>
  );
}

const mapStateToProps = (state) => {
  return {
    flashes: state.flashes
  }
};

export default connect(
  mapStateToProps
)(AlertMessage);