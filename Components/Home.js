import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground  } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/conejos.jpg')} style={{ width, height }} resizeMode="cover">
      <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>
      <Text style={styles.title}>Hola, Bienvenido a mi Examen Práctico</Text>
      <Button title="Ir a Ahorros" onPress={() => navigation.navigate('Ahorros')}  color="#593e2b" />
      <Button title="Ir a Perfil" onPress={() => navigation.navigate('Perfil')} color="#593e2b"/>
      <Button title="Ir a Configuración" onPress={() => navigation.navigate('Configuración')} color="#593e2b"/>
    </View>
    </ImageBackground>
    
  );
};


const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Fondo semitransparente
      },
      title: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 20, // Agregado para separar el título de los botones
      },
      Button: {
        color: '#322116',
        fontWeight: 'bold',
        marginBottom: 20, // Agregado para separar el título de los botones
      },
});

export default Home;
