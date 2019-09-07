import React, {Component} from 'react';
import '../styling/status-buttons.css';
// import axios from 'axios'

class StatusButtons extends Component {
  constructor() {
    super()
    this.updateFlashcardState = this.updateFlashcardState.bind(this)
  }

    // updateFlashcardState() {
    //  axios.put('"http://localhost:3000/api/flashcards+"#{flashcard.id}')
    //  .then(response => this.setState({currentFlashcard: response.data.id}))
    //  .catch(err => console.log(err))
    // } 
    
  updateFlashcardState() {
    console.log('update state')
  }
  
  render() {
    let updateButtons;

    if (this.props.statusUpdated === false) {
      //show first flashcard
    } else if (this.props.statusUpdated === true) {
      //show next flashcard
    }

    return (
      <div className='button-group'>
        <button className='button' id='red' onClick={this.updateFlashcardState}>Repeat, please</button>
        <button className='button' id='yellow' onClick={this.updateFlashcardState}>Needs more practice</button>
        <button className='button' id='green' onClick={this.updateFlashcardState}>I got this!</button>
      </div>
    )
  }
};

export default StatusButtons;