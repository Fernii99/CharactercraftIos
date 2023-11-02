import React from 'react';

import Torreon from '../components/Torreon.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default IstvanNavigation = () =>{
    return (
        <Tab.Navigator  screenOptions={{
            tabBarStyle: { backgroundColor: '#F7F7F7' },
            }}>
            <Tab.Screen  name="Torreon" component={ Torreon } options={{
                headerStyle: {
                height:30,
                },
            }}
            />
        </Tab.Navigator>
    )
}