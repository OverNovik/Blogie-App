import axios from 'axios';

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const API_KEY = 'AIzaSyB1Cn5ES-dB2k0n2ex-qyOJemCNL1pHxFQ';

export const authenticate = async (
  mode: string,
  email: string,
  password: string,
) => {
  const response = await axios.post(`${BASE_URL}${mode}?key=${API_KEY}`, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
};

export const createUser = async (email: string, password: string) => {
  await authenticate('signUp', email, password);
};

export const login = async (email: string, password: string) => {
  await authenticate('signInWithPassword', email, password);
};
