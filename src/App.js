import React, { Component } from 'react';
import Flashcard from './components/Flashcard';
import StatusButtons from './components/StatusButtons';
import axios from 'axios';

class App extends Component {
  state = {
    flashcards: [],
    // The state might has to be a current flashcard, but all flashcards should of course be available from the json file
    // currentFlashcard: {}
  };

  componentDidMount() {
    // I think the requested url for each current flashcard then should be: 'http://localhost:3000api/flashcards/"+"#{flashcard.id}'
    axios.get('http://localhost:3000/api/flashcards')
      .then(response => {
        this.setState({
          flashcards: response.data
        })
      })
  };

  render() {
    const flashcards = this.state.flashcards
    let flashcardDisplay 

    // This is the old function outcommented:
    // if (flashcards.length >= 1) {
    //   flashcardDisplay = <Flashcard flashcard={flashcards[0]} key={flashcards[0].id} />
    // };

    // This is my attempt for a for loop. Problem is that it only returns the last flashcard of the array

    for (var i = 0; i < flashcards.length; i++) {
      if (flashcards.length >= 0) {
        flashcardDisplay = <Flashcard flashcard={flashcards[i]} key={flashcards[i].id} />
      };
    };

    return (
      <>
        <h1>FlashHub</h1>
        {flashcardDisplay}
        <StatusButtons />
      </>
    )
  };
};

export default App;
