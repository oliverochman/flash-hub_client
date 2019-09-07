import React, { Component } from "react";
import Flashcard from "./components/Flashcard";
import axios from "axios";
import "./styling/status-buttons.css";
import { updateFlashcardStatus } from "./modules/updateFlashcardStatus";

class App extends Component {
  state = {
    flashcards: [],
    currentFlashcard: {},
    statusUpdated: false
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3000/api/flashcards");
    this.setState({
      flashcards: response.data
    });
  }

  updateStatus = async (event) => {
    debugger
    let status = event.target.id
    let response = await updateFlashcardStatus(status)
    // .then(() => {
    //   this.setState({
    //     statusUpdated: true,
    //     status: response.data.status
    //   });
    //   console.log("update green state");
    // });
  }

  render() {
    const flashcards = this.state.flashcards;
    let flashcardDisplay;
    let statusMessage;

    if (flashcards.length >= 1) {
      flashcardDisplay = (
        <Flashcard flashcard={flashcards[0]} key={flashcards[0].id} />
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
          <button className='update-button' id='red'>Repeat, please</button>
          <button className='update-button' id='yellow'>Needs more practice</button>
          {/* <button className='update-button' onClick={(e) => this.updateStatus.bind(this, e)} id='green'>I got this!</button> */}
          <button className='update-button' onClick={this.updateStatus.bind(this)} id='green'>I got this!</button>

        </div>


      </>
    );
  }
}
export default App;
