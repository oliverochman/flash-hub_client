import React, { Component } from 'react';
import Flashcard from './components/Flashcard';
import axios from 'axios';
import './styling/status-buttons.css';
import { updateFlashcardStatus } from './modules/updateFlashcardStatus'

class App extends Component {
  state = {
    flashcards: [],
    statusUpdated: false
  }
  

  async componentDidMount () {
    const response = await axios.get('http://localhost:3000/api/flashcards')
    this.setState({
      flashcards: response.data
    })
  };

  async updateGreenStatus() {
    let response = await updateFlashcardStatus(
      this.props.status
    )
    .then(() => {
      this.setState({
        statusUpdated: true,
        status: response.data.status
      });
    console.log('update green state')
    })
  }

  render() {
    const flashcards = this.state.flashcards
    let flashcardDisplay 
    let statusMessage

    if (flashcards.length >= 1) {
      flashcardDisplay = <Flashcard flashcard={flashcards[0]} key={flashcards[0].id} />
    };

    // for (var i = 0; i < flashcards.length; i++) {
    //   if (flashcards.length >= 0) {
    //     flashcardDisplay = <Flashcard flashcard={flashcards[i]} key={flashcards[i].id} />
    //   };
    // };

    if (this.props.statusUpdated === false) {
      statusMessage = (
      <>
        <p>Successfully added status</p>
      </>
      )
    } else if (this.props.statusUpdated === true) {
      statusMessage= (
      <>
        <p>No status</p>
      </>
      )
    };

    return (
      <>
        <h1>FlashHub</h1>
        {flashcardDisplay}
        {statusMessage}
        
        {/* <div className='button-group'>
          <button className='update-button' id='red'>Repeat, please</button>
          <button className='update-button' id='yellow'>Needs more practice</button>
          <button className='update-button' onClick={this.updateGreenStatus.bind(this)} id='green'>I got this!</button>
        </div> */}

        <form className='button-group'>
          <label>
            <input type='radio' 
                   name='update' 
                   className='update-button' 
                   id='red'
                   onChange={e => this.setState({ red: e.target.value })}/>
                   Repeat, please
          </label>

          <label>
            <input type='radio' 
                   name='update' 
                   className='update-button' 
                   id='yellow' 
                   onChange={e => this.setState({ yellow: e.target.value })}/>
                   Needs more practice
          </label>

          <label>
            <input type='radio' 
                   name='update' 
                   className='update-button' 
                   id='green'
                   onClick={this.updateGreenStatus.bind(this)} onChange={e => this.setState({ green: e.target.value })}/>
                   I got this!
          </label>
        </form>
      </>
    )
  };
};

export default App;
