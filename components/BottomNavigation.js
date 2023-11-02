import React, { Component } from 'react';
import {View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


import Potions from './Potions';
import Profile from './Profile';
import QRCodeScreen from './QrScreen.js';
import QrScanner from './QrScanner.js';



export default function BottomNavigation({loaded}){

    if(loaded){

        return (
                <Tab.Navigator  screenOptions={{
                    tabBarStyle: { backgroundColor: '#F7F7F7' },
                    }}>
                    <Tab.Screen  name="Potions" component={ Potions } options={{
                        headerStyle: {
                        height:30,
                        } ,
                    }}
                    />
                    <Tab.Screen  name="Profile" component={ Profile } options={{
                        headerStyle: {
                        height:30,
                        } ,
                    }}
                    />
                    <Tab.Screen  name="QRCodeScreen" component={ QRCodeScreen } options={{
                        headerStyle: {
                        height:30,
                        } ,
                    }}
                    />
                    <Tab.Screen  name="QRCodeScanner" component={ QrScanner } options={{
                        headerStyle: {
                        height:30,
                        } ,
                    }}
                    />

                </Tab.Navigator>
            );
    }
}
    