import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import BonusScreen from '../screens/BonusScreen';
import TicketScreen from '../screens/TicketScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#777',
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
        },
        tabBarIcon: ({ color }) => {
          let icon = 'home-outline';

          if (route.name === 'Brochure') icon = 'home-outline';
          if (route.name === 'Bonus') icon = 'gift-outline';
          if (route.name === 'Ticket') icon = 'ticket-outline';
          if (route.name === 'Settings') icon = 'settings-outline';

          return <Icon name={icon} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Brochure" component={HomeScreen} />
      <Tab.Screen name="Bonus" component={BonusScreen} />
      <Tab.Screen name="Ticket" component={TicketScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
