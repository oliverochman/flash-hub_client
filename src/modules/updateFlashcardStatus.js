import axios from 'axios';

//Move this too App.js component?
const apiUrl = 'http://localhost:3000/api/flashcards';

const updateGreenStatus = async (status) => {

  let headers = await sessionStorage.getItem('status');
    headers = JSON.parse(headers);
    headers =  {
      ...headers,
      "Content-type": "application/json",
      Accept: "application/json"
    };
  const path = apiUrl + `${flashcard.id}`;
  return new Promise((resolve, response) => {
    axios.put(path, {
      headers: headers
    })
    .then(response => {
      resolve(response);
    });
  });
};

export { updateGreenStatus }