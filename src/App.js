import React, { Component } from "react";
import Flashcard from "./components/Flashcard";
import axios from "axios";
import "./styling/status-buttons.css";
import { updateFlashcardStatus } from "./modules/updateFlashcardStatus";

class App extends Component {
  state = {
    flashcards: [],
    currentFlashcard: {}
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3000/api/flashcards");
    this.setState({
      flashcards: response.data,
      activeFlashcard: 0
    });
  }

  updateStatus = (event) => {
    let status = event.target.id
    let flashCardId = this.state.flashcards[this.state.activeFlashcard].id
    updateFlashcardStatus(status, flashCardId).then(
      this.setState({
        activeFlashcard: this.state.activeFlashcard + 1
      })
    )
  }

  render() {
    const flashcards = this.state.flashcards;
    let flashcardDisplay;

    if (flashcards.length >= 1) {
      flashcardDisplay = (
        <Flashcard flashcard={flashcards[this.state.activeFlashcard]} key={flashcards[this.state.activeFlashcard].id} />
      );
    }

    return (
      <>
        <h1>FlashHub</h1>
        {flashcardDisplay}

        <div className='button-group'>
          <button className='update-button' onClick={(e) => this.updateStatus(e)} id='red'>Repeat, please</button>
          <button className='update-button' onClick={(e) => this.updateStatus(e)} id='yellow'>Needs more practice</button>
          <button className='update-button' onClick={(e) => this.updateStatus(e)} id='green'>I got this!</button>
        </div>


      </>
    );
  }
}
export default App;
