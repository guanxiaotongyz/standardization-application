import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="标准化软件" component={ScreenOne}  />
        <Stack.Screen name="标准化软件2" component={ScreenTwo} />
        <Stack.Screen name="标准化软件3" component={ScreenTwo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

