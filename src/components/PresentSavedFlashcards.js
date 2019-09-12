import React, { Component } from 'react';
// import SavedFlashcards from './SavedFlashcards';
import axios from 'axios';
import Flashcard from './Flashcard';

class PresentSavedFlashcards extends Component {
  state = {
    saved_flashcards: [],
    currentUser: {},
    isSignedIn: true
  };

  componentDidMount() {
    this.getSavedFlashcards();
  };

  async getSavedFlashcards() {
    try {
      const response = await axios.get(
        `/${this.props.currentUser.id}/saved_flashcards`
      );
        this.setState({ savedFlashcards: response.data });
      } catch (error) {
        this.props.dispatchFlash(error.response.data.errors, "error");
      }
  };

  render() {
    let savedFlashcardDisplay;
    let saved_flashcards;

    if (this.props.currentUser && saved_flashcards.length >= 1) {
      savedFlashcardDisplay = (
        <Flashcard
          currentDeckCategory={'User Saved'}
          flashcard={this.state.savedFlashcards[this.state.activeCard]}
          key={this.state.savedFlashcards[this.state.activeCard].id}
          nextCard={this.nextCard}
        />
      );
    };
    return (
      <>
        {savedFlashcardDisplay}
      </>
    )
  }
};

export default PresentSavedFlashcards;