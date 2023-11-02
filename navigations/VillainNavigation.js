import React from 'react';

import Potions from '../components/Potions';
import Profile from '../components/Profile';
import QRCodeScreen from '../component/QrScreen.js';
import Torreon from '../components/Torreon.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default VillainNavigation = () =>{
    return (
        <Tab.Navigator  screenOptions={{
            tabBarStyle: { backgroundColor: '#F7F7F7' },
            }}>
            <Tab.Screen  name="Profile" component={ Profile } options={{
                headerStyle: {
                height:30,
                },
            }}
            />
            <Tab.Screen  name="Potions" component={ Potions } options={{
                headerStyle: {
                height:30,
                },
            }}
            />
            <Tab.Screen  name="Torreon" component={ Torreon } options={{
                headerStyle: {
                height:30,
                },
            }}
            />
            <Tab.Screen  name="QRCodeScreen" component={ QRCodeScreen } options={{
                headerStyle: {
                height:30,
                } ,
            }}
            />
        </Tab.Navigator>
    )
}