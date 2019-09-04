import React, { Component } from 'react';
import { Container, Reveal, Card } from 'semantic-ui-react';

const FlashCardTemplate = (props) => {
  const flashcard = props.flashcard;
    return (
      <Container>
        <Reveal animated='fade'>
          <Reveal.Content visible>
            <Card style={{width: 400, height: 400}}>
              <Card.Header style={{marginTop: '10em'}} textAlign='center'>
                Question
              </Card.Header>
            </Card>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Card style={{width: 400, height: 400}}>
              <Card.Header style={{marginTop: '10em'}} textAlign='center'>
                Answer
              </Card.Header>
            </Card>
          </Reveal.Content>
        </Reveal>
      </Container>
    )
}

export default FlashCardTemplate;