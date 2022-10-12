import {createContext} from 'react';

interface Auth {
  token: string | null;
  isAuth: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<Auth>(null as unknown as Auth);
