import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import BonusScreen from '../screens/BonusScreen';
import TicketScreen from '../screens/TicketScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BrochureScreen from '../screens/BrochureScreen';



const Tab = createBottomTabNavigator();

// Custom center button component
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.customButtonContainer}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <View style={styles.customButton}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#1e1e1e',
          height: 70,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Brochure"
        component={BrochureScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/Notes.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#007bff' : '#777',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bonus"
        component={BonusScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/Sale.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#007bff' : '#777',
              }}
            />
          ),
        }}
      />
      {/* Center Button */}
      <Tab.Screen
        name="Home"
        component={HomeScreen} // Can be Brochure or Home
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/Maskottchen Vendo 1.png')}
              style={{
                width: 35,
                height: 35,
                tintColor: '#007bff',
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/Ticket.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#007bff' : '#777',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/Settings.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#007bff' : '#777',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  customButtonContainer: {
    top: -20, // lift above tab bar
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // shadow on Android
    shadowColor: '#000', // shadow on iOS
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
