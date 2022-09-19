import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import TutorialScreen from './screens/TutorialScreen/TutorialScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
