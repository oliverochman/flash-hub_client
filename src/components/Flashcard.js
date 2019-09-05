import React from 'react';
import { Container, Reveal, Card } from 'semantic-ui-react';

// class FlashcardTemplate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: '',
//       question: '',
//       answer: ''
//     }
//   }

const Flashcard = (props) => (
  <>
    <Container>
        <Reveal animated='fade'>
          <Reveal.Content visible>
            <Card style={{ width: 400, height: 400 }} id='flashcard-front'>
              <Card.Header id='question' style={{ marginTop: '10em' }} textAlign='center'>
                QUESTION
              </Card.Header>
            </Card>
          </Reveal.Content>
          <Reveal.Content>
            <Card style={{ width: 400, height: 400}} id='flashcard-back'>
              <Card.Header id='answer' style={{ marginTop: '10em' }} textAlign='center'>
                ANSWER
              </Card.Header>
            </Card>
          </Reveal.Content>
        </Reveal>
    </Container>
  </>
)

export default Flashcard;