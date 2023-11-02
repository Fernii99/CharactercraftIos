import React, { Component } from 'react';
import {View, Text } from 'react-native';


import MortimerNavigation from '../navigations/MortimerNavigation';
import AcolyteNavigation from '../navigations/AcolyteNavigation';
import VillainNavigation from '../navigations/VillainNavigation';
import IstvanNavigation from '../navigations/IstvanNavigation';


export default function BottomNavigation({loaded}){
    if(loaded){
        return (
                if(){
                    <MortimerNavigation />
                }
                else if(){
                    <AcolyteNavigation />
                }
                else if(){
                    <VillainNavigation />
                }
                else {
                    <IstvanNavigation />
                }
            );
    }
}
    