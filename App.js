import React, {useState} from 'react';
import { StyleSheet, Text, View,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {  TransitionPresets } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import Splash from "./screens/Authorization/Splash"
import SignIn from './screens/Authorization/SignIn'
import SignUp from "./screens/Authorization/SignUp"

import PersonalDetails from "./screens/Authorization/UserDetails/PersonalDetails"
import LocationDetails from "./screens/Authorization/UserDetails/LocationDetails"
import VehicleDetails from "./screens/Authorization/UserDetails/VehicleDetails"

import BottomTabNavigator from "./navigation/BottomTabNavigator"

import HomeUserDetail from "./screens/TabScreens/User/HomeUserDetail"
import News from "./screens/TabScreens/User/News"
import NewsDetails from "./screens/TabScreens/User/NewsDetails"

import Quotations from "./screens/TabScreens/User/Quotations"





LogBox.ignoreAllLogs();

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontLoaded,setFontLoaded]=useState(false)

  React.useEffect(() => {
    Font.loadAsync({
      ...Ionicons.font,
      "poppins-black": require("./assets/fonts/Poppins-Black.ttf"),
      "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "poppins-semiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "poppins-extraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
      "poppins-extraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
      "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
      
    });

    
     setFontLoaded(true)
    console.log(fontLoaded);
 
  });



  return (
         

    <NavigationContainer ref={navigationRef}>

        <Stack.Navigator
              screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                headerShown: false,
                ...TransitionPresets.ModalSlideFromRightIOS,
              }}
              initialRouteName="SignIn">
                 
                <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
              <Stack.Screen name="LocationDetails" component={LocationDetails} />
              <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
              <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
              <Stack.Screen name="HomeUserDetail" component={HomeUserDetail} />
              <Stack.Screen name="Quotations" component={Quotations} />
              <Stack.Screen name="NewsDetails" component={NewsDetails} />
              




         </Stack.Navigator>
    
    </NavigationContainer>
  );
}
