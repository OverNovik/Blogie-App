import React from 'react';
import {StatusBar} from 'react-native';
import {GlobalStyles} from './constants/style';
import Main from './navigation/Main';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={GlobalStyles.colors.white}
      />
      <Main />
    </>
  );
};

export default App;
