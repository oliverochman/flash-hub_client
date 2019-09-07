import axios from 'axios';

const updateFlashcardStatus = async (id, status) => {
  try {
    let response = await axios.put(`http://localhost:3000/api/flashcards/${id}` , {
        statusUpdated: true,
      });
    return response;
  } catch (error) {
    return error.response;
  }
};

export { updateFlashcardStatus }

