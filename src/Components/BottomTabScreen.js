import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

import LoginAction from '../Actions/LoginAction'
import  CustomerDrawerScreen from '../Components/CustomerDrawerScreen'
import  ArtWorksScreen from '../Components/ArtWorksScreen'
import SearchScreen from '../Components/SearchScreen'
import SortScreen from '../Components/SortScreen'
import ExhibitionsScreen from '../Components/ExhibitionsScreen'
import ArtWorkDeatilViewScreen from '../Components/ArtWorkDeatilViewScreen'
function MyTabs() {

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="black"
      inactiveColor="#8f9094"
      // tabBarColor='white'
      barStyle={{ backgroundColor: '#694fad' }}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'red', height: 80
      }}

    >

      <Tab.Screen
        name="Feed"
        component={ArtWorksScreen}
        options={{
          tabBarLabel: null,
          // tabBarLabel: 'CALENDAR',
          gestureEnabled: false,
          tabBarColor: 'white',
          tabBarIcon: ({ color }) => (
            <Image resizeMode={'contain'} style={{ width: 30, height: 30, tintColor: color }} source={require('../imgs/Artworks.png')} />
          ),
        }} />

      <Tab.Screen
        name="Videos"
        component={ExhibitionsScreen}
        options={{
          tabBarLabel: null,
          gestureEnabled: false,
          tabBarColor: 'white',
          tabBarIcon: ({ color }) => (
            <Image resizeMode={'contain'} style={{ width: 30, height: 30, tintColor: color }} source={require('../imgs/Exhibitions.png')} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Camra"
        component={LoginAction}
        options={{
          tabBarLabel: null,
          gestureEnabled: false,
          tabBarColor: 'white',
          tabBarIcon: ({ color }) => (
            <Image resizeMode={'contain'} style={{ width: 30, height: 30, tintColor: color  }} source={require('../imgs/Website.png')} />
          ),
        }}
      /> */}

      <Tab.Screen
        name="Search"
        component={LoginAction} 
        options={{
          tabBarLabel: null,
          gestureEnabled: false,
          showLabel: true,
          tabBarColor: 'white',
          tabBarIcon: ({ color }) => (
            <Image resizeMode={'contain'} style={{ width:30, height: 30, tintColor: color }} source={require('../imgs/Website.png')} />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={LoginAction}
        options={{
          tabBarLabel: null,
          gestureEnabled: false,
          tabBarColor: 'white',
          tabBarIcon: ({ color }) => (
            <Image resizeMode={'contain'} style={{ width: 30, height: 30, tintColor: color }} source={require('../imgs/More_tools.png')} />
          ),
        }}
      />
    </Tab.Navigator>

  );
}

MyTabs.navigationOptions = {
  header: {
    style: {
      backgroundColor: 'red',
    }
  },
};

function MyDrawer() {

  return (
    <Drawer.Navigator initialRouteName="Home"  drawerStyle={{ width: '80%' }} drawerContent={(props) => <CustomerDrawerScreen {...props} />}>
    <Drawer.Screen name="Home" component={MyTabs} />
  </Drawer.Navigator>
    );
  }

export default function App() {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}> 
      <Stack.Screen name="Drawer" component={MyDrawer} options={{ gestureEnabled: false, }} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ gestureEnabled: false, }} />
     
      <Stack.Screen  name="SortScreen" component={SortScreen} options={{gestureEnabled: false,}}/>
      <Stack.Screen  name="ArtWorkDeatilViewScreen" component={ArtWorkDeatilViewScreen} options={{gestureEnabled: false,}}/>
     
    </Stack.Navigator>
  );
  
}