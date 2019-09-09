import axios from 'axios';

const updateFlashcardStatus = async (status, id) => {
  try {
    let response = await axios.put(`http://localhost:3000/api/flashcards/${id}/?status=${status}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export { updateFlashcardStatus }