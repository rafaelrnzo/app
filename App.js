import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/auth/LoginScreen';
import MainJurnal from './screens/jurnal/MainJurnal';
import CreateJurnal from './screens/jurnal/CreateJurnal';


export default function App() {
  const Stack = createNativeStackNavigator();
  const navigationRef = React.useRef();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName='Login'>
        {/* Auth */}
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* Jurnal */}
        <Stack.Screen name="MainJurnal" component={MainJurnal} /> 
        <Stack.Screen name="CreateJurnal" component={CreateJurnal} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
