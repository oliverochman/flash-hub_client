import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Flashcard from './components/Flashcard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcards: [ 
        { id: 1, 
          question: "How can you include an external javascript file?", 
          answer: "/script src='myfile.js'/"
        }
      ],
      currentFlashcard: {}
    }
  }

  componentDidMount() {
    const currentFlashcard = this.state.flashcards;

    this.setState({
      flashcard: currentFlashcard
    })
  }

  //   async currentFlashcard() {
  //     try {
  //       const response = await axios.get('http://localhost:3000/api/flash_cards');
  //     this.setState({
  //       flashcards: response.data
  //     });
  //   } catch (error) {
  //     this.setState({
  //       flashcardsDisplay: false
  //     });
  //   }
  // }

  render() {
    return (
      <>
        <Container>
          <h1>FlashHub</h1>
            <Flashcard />
        </Container>
      </>
    );
  }
}

export default App;
