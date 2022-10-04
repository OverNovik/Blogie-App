import axios from 'axios';

const API_KEY = 'AIzaSyB1Cn5ES-dB2k0n2ex-qyOJemCNL1pHxFQ';

export const createUser = async (
  email: string,
  username: string,
  password: string,
) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      username: username,
      password: password,
      returnSecureToken: true,
    },
  );
  console.log(response.data);
  // const token = response.data.idToken;
  // return token;
};
