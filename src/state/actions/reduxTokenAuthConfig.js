import { generateAuthActions } from 'redux-token-auth';

const config = {
  authUrl: "http://localhost:3000/api/auth",
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