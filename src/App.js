import React, { Component } from 'react';
import Flashcard from './components/Flashcard';
import axios from 'axios';
import './styling/status-buttons.css';
import { uppdateFlashcardState } from './modules/updateFlashcardState'

class App extends Component {
  constructor() {
    super()
      this.state = {
        flashcards: [],
        status: {}
      }
    this.updateFlashcardState = this.updateFlashcardState.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/flashcards')
      .then(response => {
        this.setState({
          flashcards: response.data
        })
      })
  };

  updateFlashcardState() {
    axios.put('http://localhost:3000/api/flashcards/"+"#{flashcard.id}')
    .then(response => 
      this.setState({
        status: ''
      })
    )
    console.log('update state')
  }

  render() {
    const flashcards = this.state.flashcards
    let flashcardDisplay 

    if (flashcards.length >= 1) {
      flashcardDisplay = <Flashcard flashcard={flashcards[0]} key={flashcards[0].id} />
    };

    // for (var i = 0; i < flashcards.length; i++) {
    //   if (flashcards.length >= 0) {
    //     flashcardDisplay = <Flashcard flashcard={flashcards[i]} key={flashcards[i].id} />
    //   };
    // };

    return (
      <>
        <h1>FlashHub</h1>
        {flashcardDisplay}
        
        <div className='button-group'>
          <button className='update-button' id='red' onClick={this.updateFlashcardState}>Repeat, please</button>
          <button className='update-button' id='yellow' onClick={this.updateFlashcardState}>Needs more practice</button>
          <button className='update-button' id='green' onClick={this.updateFlashcardState}>I got this!</button>
        </div>
      </>
    )
  };
};

export default App;
