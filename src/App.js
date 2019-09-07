import React, { Component } from 'react';
import Flashcard from './components/Flashcard';
import axios from 'axios';
import './styling/status-buttons.css';

class App extends Component {
  state = {
    flashcards: [],
    status: 'no_status',
  }

  async componentDidMount() {
    let response = await axios.get('http://localhost:3000/api/flashcards')
      this.setState({
        flashcards: response.data
    })
  };

  updateStatusHandler = () => {
    axios.put('/api/flashcards/${this.props.id}')
    .then(() => {
      this.setState({
        status: 'green'
      })
    })
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
        
        <form className='button-group' onSubmit={(e) => this.updateStatusHandler(e)}>
          <input type='radio' className='update-button' id='red'>Repeat, please</input>
          <input type='radio' className='update-button' id='yellow'>Needs more practice</input>
          <input type='radio' className='update-button' id='green'>I got this!</input>
        </form>
      </>
    )
  };
};

export default App;
