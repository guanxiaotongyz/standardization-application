import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenThree from './screens/ScreenThree';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={ScreenOne}    />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ headerBackTitle: 'Back' }} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} options={{ headerBackTitle: 'Back' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

