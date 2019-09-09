import React, { Component } from "react";
import Flashcard from "./components/Flashcard";
import axios from "axios";
import "./styling/status-buttons.css";
import { updateFlashcardStatus } from "./modules/updateFlashcardStatus";

class App extends Component {
  state = {
    flashcards: []
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3000/api/flashcards");
    this.setState({
      flashcards: response.data,
      activeFlashcard: 0
    });
  };

  updateStatus = (event) => {
    let status = event.target.id
    let flashcardId = this.state.flashcards[this.state.activeFlashcard].id
    updateFlashcardStatus(status, flashcardId).then(
      this.setState({
        activeFlashcard: this.activeFlashcard + 1
      })
    )
  };

  render() {
    const flashcards = this.state.flashcards;
    let flashcardDisplay;
    let statusMessage;

    if (flashcards.length >= 1) {
      flashcardDisplay = (
        <Flashcard flashcard={flashcards[this.state.activeFlashcard]} key={flashcards[this.state.activeFlashcard].id} />
      );
    }

    if (this.props.statusUpdated === false) {
      statusMessage = <p>Successfully added status</p>;
    } else {
      statusMessage = <p>No status</p>;
    }
    return (
      <>
        <h1>FlashHub</h1>
        {flashcardDisplay}
        {statusMessage}

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
