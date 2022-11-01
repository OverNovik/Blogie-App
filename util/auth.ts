import axios from 'axios';

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const API_KEY = 'AIzaSyB1Cn5ES-dB2k0n2ex-qyOJemCNL1pHxFQ';

export const authenticate = async (
  mode: string,
  email: string,
  password: string,
  username?: string,
) => {
  const response = await axios.post(`${BASE_URL}${mode}?key=${API_KEY}`, {
    email: email,
    username: username,
    password: password,
    returnSecureToken: true,
  });

  return response.data;
};

export const createUser = (email: string, password: string) => {
  return authenticate('signUp', email, password);
};

export const login = (email: string, password: string) => {
  return authenticate('signInWithPassword', email, password);
};
