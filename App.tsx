import React from 'react';
import {StatusBar} from 'react-native';
import {GlobalStyles} from './constants/style';
import Main from './navigation/Main';
import AuthProvider from './store/AuthProvider';
import StoryProvider from './store/StoryProvider';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={GlobalStyles.colors.white}
      />
      <AuthProvider>
        <StoryProvider>
          <Main />
        </StoryProvider>
      </AuthProvider>
    </>
  );
};

export default App;
