import React from 'react';
// import '../styling/flashcard.css';
import "../styling/status-buttons.css";
import { Reveal, Card, Button } from 'semantic-ui-react';

const Flashcard = (props) => {
  let flashcard = props.flashcard;
  return (
    <>
      <Reveal animated='fade' id={`id_${flashcard.id}`}>
        <Reveal.Content visible>
          <Card style={{ width: 580, height: 400 }}>
            <Card.Header as="h1" className="ui orange header" id={`question_${flashcard.id}`} style={{ marginTop: '5em' }} textAlign='center'>
            {flashcard.question}
            </Card.Header>
          </Card>
        </Reveal.Content>
        <Reveal.Content>
          <Card style={{ width: 580, height: 400 }}>
            <Card.Header as="h3" className="ui black header" id={`answer_${flashcard.id}`} style={{ marginTop: '7em', marginLeft: '1em', marginRight: '1em'}} textAlign='center'>
            {flashcard.answer}
            </Card.Header>
          </Card>
        </Reveal.Content>
      </Reveal>

      <Button className='update-button' onClick={props.updateStatus} id='red'>
        Repeat, please
      </Button>
      <Button className='update-button' onClick={props.updateStatus} id='yellow'>
        Needs more practice
      </Button>
      <Button className='update-button' onClick={props.updateStatus} id='green'>
        I got this
      </Button>
    </>
  )
};

export default Flashcard;