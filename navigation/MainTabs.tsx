import React from 'react';
import * as Screens from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabIcon from '../components/UI/TabIcon/TabIcon';
import {BottomTabProps} from './types';
import {styles} from './style';

const Tab = createBottomTabNavigator<BottomTabProps>();

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
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons/Home.png')}
              focused={focused}
              styleImage={styles.focusTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={Screens.NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons/Notification.png')}
              focused={focused}
              styleImage={styles.focusTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddStoryScreen"
        component={Screens.AddStoryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons/Plus.png')}
              focused={focused}
              styleContainer={styles.addStoryBtn}
              styleImage={styles.focusAddStory}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Screens.ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons/Profile.png')}
              focused={focused}
              styleImage={styles.focusTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ReadingListScreen"
        component={Screens.ReadingListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons/Read.png')}
              focused={focused}
              styleImage={styles.focusTab}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
