import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, View} from 'react-native';
import ScreenSwitcher from '../components/UI/ScreenSwitcher/ScreenSwitcher';
import TabIcon from '../components/UI/TabIcon/TabIcon';
import * as Screens from '../screens';
import MainTabs from './MainTabs';
import {styles} from './style';
import {AuthorizedNativeStackProps} from './types';

const Stack = createNativeStackNavigator<AuthorizedNativeStackProps>();

const AuthorizedScreens: React.FC = () => {
  const navigation = useNavigation();
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
            headerTitleAlign: 'center',
            headerLeft: () => (
              <View style={styles.backBtn}>
                <Pressable onPress={() => navigation.goBack()}>
                  <View>
                    <TabIcon source={require('../assets/icons/Fill.png')} />
                  </View>
                </Pressable>
              </View>
            ),
            headerRight: () => (
              <ScreenSwitcher disabledDraft={true} onPressNext={() => {}} />
            ),
            title: '',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthorizedScreens;
