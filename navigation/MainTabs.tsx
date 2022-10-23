import React from 'react';
import {View, Pressable} from 'react-native';
import * as Screens from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabIcon from '../components/UI/TabIcon/TabIcon';
import {AuthorizedNativeStackProps, BottomTabProps} from './types';
import {styles} from './style';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator<BottomTabProps>();

type BottomTabNavigationProps = NavigationProp<
  AuthorizedNativeStackProps,
  'MainTabs'
>;

const MainTabs: React.FC = () => {
  const navigation = useNavigation<BottomTabNavigationProps>();
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
          tabBarButton: () => (
            <View style={styles.addStoryBtn}>
              <Pressable onPress={() => navigation.navigate('AddStoryScreen')}>
                <View>
                  <TabIcon source={require('../assets/icons/Plus.png')} />
                </View>
              </Pressable>
            </View>
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
