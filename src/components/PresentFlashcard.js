import React, { Component } from 'react';
import axios from "axios";
import { updateFlashcardStatus } from "../modules/updateFlashcardStatus";
import Flashcard from "./Flashcard";
import { Container, Button } from 'semantic-ui-react';

export class PresentFlashcard extends Component {
  state = {
    flashcards: [],
    activeFlashcard: 0,
    nextDeckPage: null,
    deckCategory: '',
    onlySpecificTypeOfDeck: false
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3000/api/decks");
    this.setState({
      flashcards: response.data.decks[0].flashcards,
      nextDeckPage: response.data.meta.nextPage,
      deckCategory: response.data.decks[0].category
    });
  };

  getNewDeck = async () => {
    let page;
    let response; 

    if (this.state.nextDeckPage === null) {
      page = 1
    } else {
      page = this.state.nextDeckPage
    }

    if(this.state.onlySpecificTypeOfDeck === true) {
    response = await axios.get(`http://localhost:3000/api/decks/?page=${page}&category=${this.state.deckCategory}`);
    } else {
    response = await axios.get(`http://localhost:3000/api/decks/?page=${page}`);
    }

    this.setState({
      flashcards: response.data.decks[0].flashcards,
      activeFlashcard: 0,
      nextDeckPage: response.data.meta.nextPage,
      deckCategory: response.data.decks[0].category,
      renderDeckOption: false,
    });
  };

  repeatCurrentDeck = () => {
    this.setState({
      activeFlashcard: 0,
      renderDeckOption: false
    });
  };

  getCategoryDeck = async (event) => {
    let category = event.target.id
    
    const response = await axios.get(`http://localhost:3000/api/decks/?category=${category}`);

    this.setState({
      flashcards: response.data.decks[0].flashcards,
      activeFlashcard: 0,
      nextDeckPage: response.data.meta.nextPage,
      deckCategory: response.data.decks[0].category,
      renderDeckOption: false,
      onlySpecificTypeOfDeck: true
    });
  };

  updateStatus = (event) => {
    let status = event.target.id
    let flashcardId = this.state.flashcards[this.state.activeFlashcard].id
    updateFlashcardStatus(status, flashcardId).then(() => {
      if (this.state.activeFlashcard + 1 == 10) {
        this.setState({
          renderDeckOption: true
        })
      } else {
        this.setState({
          activeFlashcard: this.state.activeFlashcard + 1
        })
      }
    })
  };

  render() {
    const flashcards = this.state.flashcards;
    let chooseDeckOption;
    let flashcardDisplay;

    if (flashcards.length >= 1 && this.state.renderDeckOption !== true) {
      flashcardDisplay = (
        <Flashcard 
          flashcard={flashcards[this.state.activeFlashcard]} 
          key={flashcards[this.state.activeFlashcard].id} 
          updateStatus={this.updateStatus}
          currentDeckCategory={this.state.deckCategory}
        />
      );
    };

    if (this.state.renderDeckOption === true) {
      chooseDeckOption = (
        <>
          <Button onClick={() => this.repeatCurrentDeck()} id="repeat-deck">
            Repeat
          </Button>
          <Button onClick={() => this.getNewDeck()} id="get-new-deck">
            New Deck
          </Button>
        </>
      )
    };
    
    return (
      <>
        <Container>
          {flashcardDisplay}
          {chooseDeckOption}
        </Container>

        <div className='category-buttons'>
          <Button onClick={(e) => this.getCategoryDeck(e)} id="ruby">
            Ruby
          </Button>
          <Button onClick={(e) => this.getCategoryDeck(e)} id="javascript"> 
            JavaScript
          </Button>
          <Button onClick={(e) => this.getCategoryDeck(e)} id="commands">
            Git Commands
          </Button>
        </div>
      </>
    )
  }
}

export default PresentFlashcard
