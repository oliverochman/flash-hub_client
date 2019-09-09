import React from 'react';
import '../styling/flashcard.css';
import "../styling/status-buttons.css";

const Flashcard = (props) => {
  let flashcard = props.flashcard;
  return (
    <div className='flashcard' id={`id_${flashcard.id}`}>
      <div className='flashcard-inner'>
        <div className='flashcard-front' id={`question_${flashcard.id}`}>
            <div className='front-text'>
              {flashcard.question}
            </div>
        </div>
        <div className='flashcard-back' id={`answer_${flashcard.id}`}>
          <div className='back-text'>
            {flashcard.answer}
          </div>
        </div>
      </div>

      <div className='button-group'>
        <button className='update-button' onClick={props.updateStatus} id='red'>Repeat, please</button>
        <button className='update-button' onClick={props.updateStatus} id='yellow'>Needs more practice</button>
        <button className='update-button' onClick={props.updateStatus} id='green'>I got this!</button>
      </div>
    </div>
  )
};

export default Flashcard;