import React from 'react';
import { shallow } from 'enzyme';
import FlashcardTemplate from '../components/FlashcardTemplate';

describe('<FlashcardTemplate />', () => {
  const flashcard = {
    "id": 1,
    "question": "How can you include an external javascript file?",
    "answer": "/script src='myfile.js'/"
  };

  it('renders correct question', () => {
    const describedComponent = shallow(<FlashcardTemplate flashcard={flashcard} />);
    const response = flashcard.question;
    expect(describedComponent.contains(response)).toEqual(true);
  });

  it('renders correct answer', () => {
    const describedComponent = shallow(<FlashcardTemplate flashcard={flashcard} />);
    const response = flashcard.answer;
    expect(describedComponent.contains(response)).toEqual(true);
  });
})