import React, { Component } from 'react';
import { Container, Reveal, Card } from 'semantic-ui-react';
import axios from 'axios';

class FlashcardTemplate extends Component {
  state = {
    id: '',
    question: '',
    answer: ''
  };

  // componentDidMount() {
  //   this.getFlashcard();
  // }

  // async getFlashcard() {
  //   const response = await axios.get('/flashcard');
  //   if (response.data.length > 0) {
  //     this.setState({
  //       flashcard: response.FlashcardTemplate
  //     });
  //   }
  // }

  componentDidMount() {
    axios.get('http://localhost:3000/api/flash_cards').then(response => {
      this.setState({ articles: response.data.flashcard });
    });
  }

  // componentDidMount() {
  //   let flashcardPath;
  //   axios.get(flashcardPath).then(response => {
  //   this.setState({
  //     id: response.data.id,
  //     question: response.data.question,
  //     answer: response.data.answer
  //   });
  //   })
  // }

  render() {
    let flashcard;
    
  return (
    <Container>
      <div id={`flashcard_${flashcard.id}`}>
        <Reveal animated='fade'>
          <Reveal.Content visible>
            <Card style={{ width: 400, height: 400 }}>
              <Card.Header id="question" style={{ marginTop: '10em' }} textAlign='center'>
                {flashcard.question}
              </Card.Header>
            </Card>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Card style={{ width: 400, height: 400 }}>
              <Card.Header id="answer" style={{ marginTop: '10em' }} textAlign='center'>
                {flashcard.answer}
              </Card.Header>
            </Card>
          </Reveal.Content>
        </Reveal>
      </div>
    </Container>
  )
}
}


export default FlashcardTemplate;