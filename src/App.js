import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Flashcard from './components/Flashcard';
import axios from 'axios';

class App extends Component {
  state = { 
    flashcards:[] 
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/flashcards')
      .then(response => {
        this.setState({
          flashcards: response.data
        })
      })
  };

  render(){
    const flashcards = this.state.flashcards
    let flashcardDisplay

    if (flashcards.length = 1 ) {
      flashcardDisplay = flashcards.map(flashcard => {
        return (
          <Flashcard flashcard={flashcard} key={flashcard.id} />
        )
      })
    };

    return (
        <>
          <Container>
            <h1>FlashHub</h1>
            {flashcardDisplay}
          </Container>
        </>
    )
  }
};

export default App;
