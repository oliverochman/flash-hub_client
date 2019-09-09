import React, { Component } from 'react'
import axios from "axios";
import { updateFlashcardStatus } from "../modules/updateFlashcardStatus";
import Flashcard from "./Flashcard";

export class PresentFlashcard extends Component {
  state = {
    flashcards: [],
    activeFlashcard: 0
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3000/api/flashcards");
    this.setState({
      flashcards: response.data
    });
  };

  updateStatus = (event) => {
    let nextFlashcard;
    let status = event.target.id
    let flashcardId = this.state.flashcards[this.state.activeFlashcard].id
    updateFlashcardStatus(status, flashcardId).then(() => {
      if (this.state.activeFlashcard + 1 == 10) {
        nextFlashcard = 0
      } else {
        nextFlashcard = this.state.activeFlashcard + 1
      }

      this.setState({
        activeFlashcard: nextFlashcard
      })
    })
  };

  render() {
    const flashcards = this.state.flashcards;
    let flashcardDisplay;

    if (flashcards.length >= 1) {
      flashcardDisplay = (
        <Flashcard 
          flashcard={flashcards[this.state.activeFlashcard]} 
          key={flashcards[this.state.activeFlashcard].id} 
          updateStatus={this.updateStatus}
        />
      );
    }
    return (
      <div>
        {flashcardDisplay}
      </div>
    )
  }
}

export default PresentFlashcard
