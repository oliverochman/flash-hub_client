import React from 'react';
import { Reveal, Card } from 'semantic-ui-react';

const Flashcard = (props) => {
  let flashcard = props.flashcard;

  return (
    <div className='flashcard' id={`id_${flashcard.id}`}>
      <Reveal animated='fade'>
        <Reveal.Content visible>
          <Card style={{ width: 400, height: 400 }} className='flashcard-front'>
            <Card.Header as='h1' className='ui orange header' id={`question_${flashcard.id}`} style={{ marginTop: '5em' }} textAlign='center'>
              {flashcard.question}
            </Card.Header>
          </Card>
        </Reveal.Content>
        <Reveal.Content>
          <Card style={{ width: 400, height: 400 }} className='flashcard-back'>
            <Card.Header as='h3' className='ui black header' id={`answer_${flashcard.id}`} style={{ marginTop: '7em' }} textAlign='center'>
              {flashcard.answer}
            </Card.Header>
          </Card>
        </Reveal.Content>
      </Reveal>
    </div>
  )
};

export default Flashcard;