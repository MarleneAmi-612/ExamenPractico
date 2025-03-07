import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/Home';
import AhorrosScreen from './Components/Ahorros';
import PerfilScreen from './Components/Perfil';
import ConfiguracionScreen from './Components/Configuracion';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ahorros" component={AhorrosScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Configuración" component={ConfiguracionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
