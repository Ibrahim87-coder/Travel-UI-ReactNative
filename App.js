import Home from './components/Home/Home';
import Liked from './components/Liked/Liked';
import Profile from './components/Profile/Profile';
import Details from "./components/Details/Details"
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import colors from './assets/colors/colors';

// navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel:false
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Liked" component={Liked} options={{
          tabBarIcon: ({color}) => (
            <Entypo name="heart" size={32} color={color} />
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" size={32} color={color} />
          ),
        }} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
},
})
