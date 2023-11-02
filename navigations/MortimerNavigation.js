
import React from 'react';

import Profile from './Profile';
import QrScanner from './QrScanner.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default MortimerNavigation = () =>{
    return (
    <Tab.Navigator  screenOptions={{
        tabBarStyle: { backgroundColor: '#F7F7F7' },
        }}>
        <Tab.Screen  name="Profile" component={ Profile } options={{
            headerStyle: {
            height:30,
            } ,
        }}
        />
        <Tab.Screen  name="QRCodeScanner" component={ QrScanner } options={{
            headerStyle: {
            height:30,
            }
        }}
        />

    </Tab.Navigator>
    )
}