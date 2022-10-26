import {createContext} from 'react';

export interface UserData {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
}

interface Auth {
  userData: UserData | null | undefined;
  isAuth: boolean;
  authenticate: (authUserData: UserData) => void;
  logout: () => void;
}

export const AuthContext = createContext(null as unknown as Auth);
