import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Perfil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/minhooo.jpg')}  style={styles.image} />
      <Text style={styles.title}>Nombre: Panchito Ramirez</Text>
      <Text>Email: shu.porang@gmail.com</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', color: '#74bcde' },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 }
});

export default Perfil;
