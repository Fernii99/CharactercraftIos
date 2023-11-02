import React, { useState } from 'react';
import {  View   } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './components/BottomNavigation';
import { useEffect } from "react";
import { Text,Modal } from "react-native";
import BootSplash from "react-native-bootsplash";
import Login from './components/loginScreen/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function App() {
 useEffect(() => {
   const init = async () => {


   };


   init().finally(async () => {
     await BootSplash.hide({ fade: true });
    //  getData();
   });
 }, []);


 const [modalVisible, setModalVisible] = useState(true);
 const [isLoaded, setLoaded] = useState(true);

 let load = false;

 const storeData = async (value) => {
   try {
     await AsyncStorage.setItem('user', value);
   } catch (e) {
     // error reading value
   }
 };
  const getData = async () => {
   try {
     const value = await AsyncStorage.getItem('user');
     if (value !== null) {
       setModalVisible(false);
     }else{
       setModalVisible(true);
     }
     setLoaded(true);
   } catch (e) {
     // error reading value
   }
 };


 const removeValue = async () => {
   try {
     await AsyncStorage.removeItem('user');
   } catch(e) {
     // remove error
   }
    console.log('Done.')
 }
    return (
    
     <View style={{flex:1}}>
         <Modal 
         visible={modalVisible}
         >
           <Login modalVisible={modalVisible} setModalVisible={setModalVisible} />
         </Modal>
         <NavigationContainer>
           <BottomNavigation loaded={isLoaded}/>
         </NavigationContainer>
        
     </View>
   )
 }