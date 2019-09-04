import React from 'react';
import { Container, Reveal, Card } from 'semantic-ui-react';

const FlashCardTemplate = (props) => {
  const flashcard = props.flashcard;
  return (
    <Container>
      <div id={`flashcard_${flashcard.id}`}>
        <Reveal animated='fade'>
          <Reveal.Content visible>
            <Card style={{ width: 400, height: 400 }}>
              <Card.Header style={{ marginTop: '10em' }} textAlign='center'>
                {flashcard.question}
              </Card.Header>
            </Card>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Card style={{ width: 400, height: 400 }}>
              <Card.Header style={{ marginTop: '10em' }} textAlign='center'>
                {flashcard.answer}
              </Card.Header>
            </Card>
          </Reveal.Content>
        </Reveal>
      </div>
    </Container>
  )
}

export default FlashCardTemplate;