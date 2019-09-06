import React from 'react';
import './flashcard.css';

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
    </div>
)
};

export default Flashcard;