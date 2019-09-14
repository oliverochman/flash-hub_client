import axios from 'axios';

const updateFlashcardStatus = async (status, flashcardId) => {
  try {
    let response = await axios.post(`/api/saved_flashcards/?flashcard_id=${flashcardId}&status=${status}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export { updateFlashcardStatus }