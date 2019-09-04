import React, {Component } from 'react';
import axios from 'axios';
import FlashcardTemplate from './FlashcardTemplate';
import { Container } from 'semantic-ui-react';

class FlashcardDisplay extends Component {
  state = {
    flashcards: []
  };

  componentDidMount() {
    this.getFlashcards();
  }

  async getFlashcards() {
    const response = await axios.get('/flashcard');
    if (response.data.length > 0) {
      this.setState({
        flashcards: response.data
      });
    }
  }
  render() {
    const flashcardsDisplay = this.state.flashcards.length > 0 && this.state.flashcards.map(flashcard => {
      return <FlashcardTemplate key={flashcard.id} flashcard={flashcard} />
    })
    return (
      <>
        <Container>
          {flashcardsDisplay ?
            flashcardsDisplay :
              <div id='flashcards-unavailable'>
                <p>No flashcards available.</p>
              </div>
            }
          </Container>
        </>
      )
    }
  }
  
export default FlashcardDisplay;