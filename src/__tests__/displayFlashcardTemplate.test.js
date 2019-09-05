import React from 'react';
import { shallow } from 'enzyme';
import Flashcard from '../components/Flashcard';

describe('<Flashcard />', () => {
  const flashcard = {
    'id': 1,
    'question': 'How can you include an external javascript file?',
    'answer': "/script src='myfile.js'/"
  };

  it('renders correct question', () => {
    const describedComponent = shallow(<Flashcard flashcard={flashcard} />);
    const response = flashcard.question;
    expect(describedComponent.contains(response)).toEqual(true);
  });

  it('renders correct answer', () => {
    const describedComponent = shallow(<Flashcard flashcard={flashcard} />);
    const response = flashcard.answer;
    expect(describedComponent.contains(response)).toEqual(true);
  });
});