import { generateAuthActions } from 'redux-token-auth';

const development = 'http://localhost:3000/api/auth'
const production = 'https://flashcard-hub.herokuapp.com/api/auth'

const config = {
  authUrl: development,
  userAttributes: {
    id: "id",
    uid: "uid",
  },
  userRegistrationAttributes: {
    password_confirmation: "password_confirmation",
  }
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config);

export { registerUser, signInUser, signOutUser, verifyCredentials };