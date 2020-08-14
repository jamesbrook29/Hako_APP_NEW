import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import SplashScreen from '../src/Components/SplashScreen'
import LoginAction from '../src/Actions/LoginAction'
import SignupAction from '../src/Actions/SignupAction'
// import ForgotPasswordAction from '../src/Actions/ForgotPasswordAction'
import BottomTabScreen from '../src/Components/BottomTabScreen'
import CustomerDrawerScreen from '../src/Components/CustomerDrawerScreen'
import SearchScreen from '../src/Components/SearchScreen'
const Stack = createStackNavigator();

export default function App() {   
  return (
    <NavigationContainer>  
       <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen  name="SearchScreen" component={SearchScreen} />    */}
        <Stack.Screen  name="SignupAction" component={SignupAction} />   
        <Stack.Screen  name="LoginAction" component={LoginAction} />  
        <Stack.Screen  name="BottomTabScreen" component={BottomTabScreen} />  
        <Stack.Screen  name="CustomerDrawerScreen" component={CustomerDrawerScreen} />   
         
      {/*   <Stack.Screen  name="DashboardScreen" component={DashboardScreen} />    */}

      </Stack.Navigator>
    </NavigationContainer>
  );
  
}