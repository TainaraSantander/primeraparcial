import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComponenteParcial01 = () => {
  const [nombre, setNombre] = useState('');
  const navigation = useNavigation();

  // Función para manejar la navegación con validación del nombre
  const handleNavigation = (screen) => {
    if (!nombre.trim()) {
      Alert.alert('Error', 'Por favor ingrese su nombre antes de continuar.');
      return;
    }
    switch (screen) {
      case 'PropsParcial02':
        navigation.navigate(screen, { nombre, semestre: 8 });
        break;
      case 'AxiosParcial03':
        navigation.navigate(screen);
        break;
      case 'AsyncStorageParcial04':
        navigation.navigate(screen);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>
      
      <Image source={require('./gatito.jpg')} style={styles.logo} />
      
      <TextInput
        placeholder="Ingresar nombre"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <View style={styles.buttonContainer}>
        <Button title="Ir a PropsParcial02" onPress={() => handleNavigation('PropsParcial02')} />
        <Button title="Ir a AxiosParcial03" onPress={() => handleNavigation('AxiosParcial03')} />
        <Button title="Ir a AsyncStorageParcial04" onPress={() => handleNavigation('AsyncStorageParcial04')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    justifyContent: 'space-between',
  },
});

export default ComponenteParcial01;
