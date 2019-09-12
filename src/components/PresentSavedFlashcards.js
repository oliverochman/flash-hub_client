import React, { Component } from 'react';
import SavedFlashcards from './SavedFlashcards';
import axios from 'axios';
import Flashcard from './Flashcard';

class PresentSavedFlashcards extends Component {
  state = {
    savedFlashcards: []
  };

  componentDidMount() {
    this.getSavedFlashcards();
  };

  async getSavedFlashcards() {
    try {
      const response = await axios.get("http://localhost:3000/api/saved_flashcards");
      this.setState({ savedFlashcards: response.data });

      // kolla hur många kort ni fick o sätt det i en state
    } catch (error) {
      // this.props.dispatchFlash(error.response.data.errors, "error");
      console.log(error)
    }
  };

  nextCard = () => {
    // om de inte är sista kortet 
    // this.setState({
    //   activeCard: activeCard + 1
    // })

    // annars
    // this.setState({
    //   activeCard: 0
    // })
  }

  render() {
    let savedFlashcardDisplay;

    if (this.state.savedFlashcards.length >= 1) {
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