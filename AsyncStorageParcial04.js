import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [facultad, setFacultad] = useState('');
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const guardarDatos = async () => {
    const nuevoDato = { codigo, carrera, facultad };
    const jsonValue = JSON.stringify([...datos, nuevoDato]);
    await AsyncStorage.setItem('datos', jsonValue);
    cargarDatos();
  };

  const cargarDatos = async () => {
    const jsonValue = await AsyncStorage.getItem('datos');
    if (jsonValue != null) {
      setDatos(JSON.parse(jsonValue));
    }
  };

  const eliminarDato = async (index) => {
    const nuevosDatos = datos.filter((_, i) => i !== index);
    const jsonValue = JSON.stringify(nuevosDatos);
    await AsyncStorage.setItem('datos', jsonValue);
    cargarDatos();
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput placeholder="Código" onChangeText={setCodigo} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Carrera" onChangeText={setCarrera} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Facultad" onChangeText={setFacultad} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Guardar" onPress={guardarDatos} />
      <FlatList
        data={datos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>Código: {item.codigo}, Carrera: {item.carrera}, Facultad: {item.facultad}</Text>
            <Button title="Eliminar" onPress={() => eliminarDato(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default AsyncStorageParcial04;
