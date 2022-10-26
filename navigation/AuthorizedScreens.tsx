import {useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import BackButton from '../components/UI/BackButton/BackButton';
import ScreenSwitcher from '../components/UI/ScreenSwitcher/ScreenSwitcher';
import * as Screens from '../screens';
import MainTabs from './MainTabs';
import {AuthorizedNativeStackProps} from './types';

type StackParamPropList = {
  PostStoryScreen: {screen: string; params: {}} | undefined;
};

const Stack = createNativeStackNavigator<AuthorizedNativeStackProps>();

const AuthorizedScreens: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamPropList>>();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="VerifyScreen" component={Screens.VerifyScreen} />
        <Stack.Screen name="TopicsScreen" component={Screens.TopicsScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen
          name="AddStoryScreen"
          component={Screens.AddStoryScreen}
          options={{
            headerShown: true,
            title: '',
            headerLeft: () => (
              <BackButton onPress={() => navigation.goBack()} />
            ),
            headerRight: () => (
              <ScreenSwitcher
                isDisabledDraft={true}
                onPressNext={() => navigation.navigate('PostStoryScreen')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="PostStoryScreen"
          component={Screens.PostStoryScreen}
          options={{
            headerShown: true,
            title: '',
            headerLeft: () => (
              <BackButton onPress={() => navigation.goBack()} />
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthorizedScreens;
