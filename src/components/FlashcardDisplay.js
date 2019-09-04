import React, { Component } from "react";
import axios from "axios";
// import FlashcardTemplate from "./FlashcardTemplate";
import { Container, Grid } from "semantic-ui-react";

class FlashcardDisplay extends Component {
  state = {
    flashcards: [],
  };
  
  componentDidMount() {
    axios.get('http://localhost:3000/api/articles').then(response => {
      this.setState({ flashcards: response.data.entries });
    });
  }

  render() {
    let flashcardList = this.state.flashcards.length ? (
      <div>
        {this.state.flashcards.map(flashcard => {
          return (
            <div id={`id_${flashcard.id}`} key={flashcard.id}>
              <h1 id={`quiestion_${flashcard.id}`}>{flashcard.question}</h1>
              <h2 id={`answer_${flashcard.id}`}>{flashcard.answer}</h2>
              <br />
            </div>
          )
        })}
      </div>
    ) : (
      <h3>There are no available flashcards on this subject at the moment. You can be the first to create one!</h3>
  )
  return (
    <>
      <Container>
        <Grid centered columns={3}>
          <Grid.Column width={7}>
            {flashcardList}
          </Grid.Column>

          <Grid.Column width={4}>
          </Grid.Column>

          <Grid.Column width={3}>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}
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

  // render() {
  //   let flashcardList = this.state.flashcards.length ? (
  //         {this.state.flashcards.map(flashcard => {
  //           return (
  //             <div id={`id_${flashcard.id}`} key={flashcard.id}>
  //               <h1 id={`question_${flashcard.id}`}>{flashcard.question}</h1>
  //               <h3 id={`answer_${flashcard.id}`}>{flashcard.answer}</h3>
  //               <br />
  //             </div>
  //           )
  //         })
  //   )};
    
  
    

}

export default FlashcardDisplay