import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComponenteParcial01 from './ComponenteParcial01';
import PropsParcial02 from './PropsParcial02';
import AxiosParcial03 from './AxiosParcial03';
import AsyncStorageParcial04 from './AsyncStorageParcial04';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ComponenteParcial01">
        <Stack.Screen name="ComponenteParcial01" component={ComponenteParcial01} />
        <Stack.Screen name="PropsParcial02" component={PropsParcial02} />
        <Stack.Screen name="AxiosParcial03" component={AxiosParcial03} />
        <Stack.Screen name="AsyncStorageParcial04" component={AsyncStorageParcial04} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
