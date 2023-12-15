import LoginScreen from '../Login';
import React from 'react';
import Home from '../Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './NavigationService';
import ReactQuiz from '../setofQuessions/Reactquiz';
import Cau1 from '../setofQuessions/quizReact/cau1';
export type RootStackParamList = {
  LoginScreen: undefined;
  Home: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReactQuiz" component={ReactQuiz} />
        <Stack.Screen name="Cau1" component={Cau1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
