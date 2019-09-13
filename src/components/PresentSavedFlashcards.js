import React, { Component } from 'react';
import axios from 'axios';
import SavedFlashcards from './SavedFlashcards';

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
      const response = await axios.get("http://localhost:3000/api/saved_flashcards");
      this.setState({ 
        savedFlashcards: response.data
        // X number of cards
      });
    } catch (error) {
      // this.props.dispatchFlash(error.response.data.errors, "error");
      console.log(error)
    }
  };

  nextCard = () => {
    if (this.state.activeCard == saved_flashcard.last) {
      this.setState({
        activeCard: 0
      })
    } else {
      this.setState({
        activeCard: activeCard + 1
      })
    }
  };

  render() {
    const savedFlashcards = this.state.SavedFlashcards;
    let savedFlashcardDisplay;

    if (this.state.saved_flashcards.length >= 1) {
      savedFlashcardDisplay = (
        <SavedFlashcards
          // currentDeckCategory={'User Saved'}
          flashcard={savedFlashcards[this.state.activeCard]}
          key={savedFlashcards[this.state.activeCard].id}
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