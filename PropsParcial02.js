import React from 'react';
import { View, Text } from 'react-native';

const PropsParcial02 = ({ route }) => {
  const { nombre, semestre } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mi nombre es: {nombre}, actualmente curso el {semestre} semestre.</Text>
    </View>
  );
};

export default PropsParcial02;
