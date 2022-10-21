import React from 'react';
import {Image} from 'react-native';
import * as Screens from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Screens.HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/icons/Home.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
