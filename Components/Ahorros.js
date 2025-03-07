import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importar iconos

const Ahorros = ({ navigation }) => {
  const [ahorro, setAhorro] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ahorro actual: ${ahorro}</Text>

      {/* Botón con icono para ahorrar $10 */}
      <TouchableOpacity
        onPress={() => setAhorro(ahorro + 10)}
        style={styles.iconButton}
      >
        <Ionicons name="add-circle" size={32} color="#007BFF" /> {/* Icono de agregar */}
        <Text style={styles.iconText}>Ahorrar $10</Text>
      </TouchableOpacity>

      {/* Botón con icono para reiniciar */}
      <TouchableOpacity
        onPress={() => setAhorro(0)}
        style={styles.iconButton}
      >
        <Ionicons name="refresh-circle" size={32} color="#FF6347" /> {/* Icono de reiniciar */}
        <Text style={styles.iconText}>Reiniciar</Text>
      </TouchableOpacity>

      {/* Botón con icono para volver */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      >
        <Ionicons name="arrow-back-circle" size={32} color="#000" /> {/* Icono de volver */}
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

export default Ahorros;
