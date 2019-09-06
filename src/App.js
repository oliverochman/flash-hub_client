import React, { Component } from 'react';
import Flashcard from './components/Flashcard';
import axios from 'axios';

class App extends Component {
  state = {
    flashcards: []
  };

  componentDidMount() {
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

    if (flashcards.length >= 1) {
      flashcardDisplay = <Flashcard flashcard={flashcards[0]} key={flashcards[0].id} />
    };

    return (
      <>
        <h1>FlashHub</h1>
        {flashcardDisplay}
      </>
    )
  };
};

export default App;
