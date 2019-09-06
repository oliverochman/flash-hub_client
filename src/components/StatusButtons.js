import React, {Component} from 'react';
import '../styling/status-buttons.css';
// import axios from 'axios'

class StatusButtons extends Component {
  constructor() {
    super()
    this.state = {
      flashcards: [],
      currentFlashcard: {
      id: ''
      }
    }
    // this.handleClick = this.handleClick.bind(this)
  }

    // handleClick() {
    //  axios.put('"http://localhost:3000/api/flashcards+"#{flashcard.id}')
    //  .then(response => this.setState({currentFlashcard: response.data.id}))
    //  .catch(err => console.log(err))
    // } 
    
    
    render() {
      return (
        <div className='button-group'>
          <div className='button' id='red' onClick={e => this.handleClick}>Repeat, please</div>
          <div className='button' id='yellow'>Needs more practice</div>
          <div className='button' id='green'>I got this!</div>
        </div>
      )
    }
  
};

export default StatusButtons;


// onClick={e => this.setState}