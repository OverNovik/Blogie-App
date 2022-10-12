import {createContext} from 'react';

interface Auth {
  token: string | null;
  isAuth: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext(null as unknown as Auth);
