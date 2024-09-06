import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import axios from 'axios';

const AxiosParcial03 = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => setComments(response.data))
      .catch(error => console.log(error));
  }, []);

  const filteredComments = comments.filter(comment => comment.name.includes(filter));

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Buscar por nombre"
        onChangeText={text => setFilter(text)}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <FlatList
        data={filteredComments}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AxiosParcial03;
