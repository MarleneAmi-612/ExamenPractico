import React from 'react';
import { View, Text, Alert, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importar iconos

const Configuracion = ({ navigation }) => {
  const handlePress1 = () => {
    console.log('Tema Cambiado');
    Alert.alert('Tema Cambiado');
    if (Platform.OS === 'web') {
      window.alert('Tema Cambiado');
    }
  };

  const handlePress2 = () => {
    console.log('Idioma Cambiado');
    Alert.alert('Idioma Cambiado');
    if (Platform.OS === 'web') {
      window.alert('Idioma Cambiado');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>

      {/* Botón con icono para cambiar tema */}
      <TouchableOpacity onPress={handlePress1} style={styles.iconButton}>
        <Ionicons name="color-palette" size={32} color="#007BFF" />
        <Text style={styles.iconText}>Cambiar Tema</Text>
      </TouchableOpacity>

      {/* Botón con icono para cambiar idioma */}
      <TouchableOpacity onPress={handlePress2} style={styles.iconButton}>
        <Ionicons name="language" size={32} color="#FF6347" />
        <Text style={styles.iconText}>Cambiar Idioma</Text>
      </TouchableOpacity>

      {/* Botón para volver */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
        <Ionicons name="arrow-back" size={32} color="#000" />
        <Text style={styles.iconText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  iconText: {
    marginTop: 5,
    fontSize: 16,
    color: '#000',
  },
});

export default Configuracion;