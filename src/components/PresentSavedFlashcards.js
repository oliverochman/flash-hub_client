import React, { Component } from 'react';
import axios from 'axios';
import SavedFlashcard from './SavedFlashcard';
import { connect } from 'react-redux';
import AlertMessage from './AlertMessage';

class PresentSavedFlashcards extends Component {
  state = {
    savedFlashcards: [],
    activeCard: 0,
    currentCollection: 'red'
  };

  componentDidMount() {
    this.getSavedFlashcards();
  };

  getSavedFlashcards = async (event) => {
    var currentCollection

    if (event !== undefined) {  
      if (event.target.innerText == 'yellow') {
        currentCollection = event.target.innerText;
      } else {
        currentCollection = event.target.innerText;
      }
    } 
    else {
      currentCollection = this.state.currentCollection
    }

    try {
      const response = await axios.get(`http://localhost:3000/api/saved_flashcards/?status=${currentCollection}`);
      this.setState({ 
        savedFlashcards: response.data.savedFlashcards,
        activeCard: 0,
        currentCollection: currentCollection,
        otherCollection: currentCollection == "red" ? "yellow" : "red"
      });
    } catch (error) {
      this.props.dispatchFlash(error.response.data.error, "error");
    }
  };

  nextCard = (event) => {
    const savedFlashcards = this.state.savedFlashcards;
    if (event.target.id == 'next_card') {
      if (this.state.activeCard == savedFlashcards.length - 1) {
        this.setState({
          activeCard: 0
        })
      } else {
        this.setState({
          activeCard: this.state.activeCard + 1
        })
      }
    } else {
      if (this.state.activeCard == 0) {
        this.setState({
          activeCard: this.state.savedFlashcards.length - 1
        })
      } else {
        this.setState({
          activeCard: this.state.activeCard - 1
        })
      }
    }
  };

  render() {
    const savedFlashcards = this.state.savedFlashcards;
    let savedFlashcardDisplay;

    let flashMessage;

    if (this.props.showFlash === true) {
      flashMessage = <AlertMessage />;
    }
    if (savedFlashcards.length >= 1) {
      savedFlashcardDisplay = (
        <SavedFlashcard
          savedFlashcard={savedFlashcards[this.state.activeCard]}
          key={savedFlashcards[this.state.activeCard].id}
          nextCard={this.nextCard}
          getOtherCollection={this.getSavedFlashcards}
          otherCollection={this.state.otherCollection}
        />
      );
    };
    return (
      <>
        {flashMessage}
        {savedFlashcardDisplay}
      </>
    )
  }
};

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser,
    showFlash: state.flashes.showFlash
  };
};
const mapDispatchToProps = {
  dispatchFlash: (message, status) => ({
    type: "SHOW_FLASH_MESSAGE",
    payload: { flashMessage: message, status: status }
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresentSavedFlashcards);