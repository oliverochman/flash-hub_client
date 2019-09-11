import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

class MyFlashcards extends Component {
  render () {
    return (
      <Modal id='my-flashcards'trigger={<Button id='my-flashcards-button'>
        My Flashcards
        </Button>}>
      </Modal>
    )
  }
}

export default MyFlashcards;