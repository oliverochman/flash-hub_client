import React from 'react';
import { Reveal, Card } from 'semantic-ui-react';

const Flashcard = (props) => {
  let flashcard = props.flashcard

  return (
    <div className='flashcard' id={`id_${flashcard.id}`}>
      <Reveal animated='fade'>
        <Reveal.Content visible>
          <Card style={{ width: 200, height: 200 }} className='flashcard-front'>
            <Card.Header id={`question_${flashcard.id}`} style={{ marginTop: '10em' }} textAlign='center'>
              {flashcard.question}
            </Card.Header>
          </Card>
        </Reveal.Content>
        <Reveal.Content>
          <Card style={{ width: 200, height: 200}} className='flashcard-back'>
            <Card.Header id={`answer_${flashcard.id}`} style={{ marginTop: '10em' }} textAlign='center'>
            {flashcard.answer}
            </Card.Header>
          </Card>
        </Reveal.Content>
      </Reveal>
    </div>
  )
}

export default Flashcard;