import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import useAuth from "../hooks/useAuth";
import Cadastro from "../screens/Cadastro";
import DetalhesEstabelecimento from "../screens/DetalhesEstabelecimento";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Perfil from "../screens/Perfil";
import Preferencias from "../screens/Preferencias";

const Stack = createStackNavigator();

export default function Navigator() {
  const { user } = useAuth();
  return (
    <Stack.Navigator initialRouteName="Perfil">
      {user.active ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetalhesEstabelecimento"
            component={DetalhesEstabelecimento}
            options={{ title: "Detalhes" }}
          />
          <Stack.Screen
            name="Preferencias"
            component={Preferencias}
            options={{ title: "Preferências" }}
          />
          <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{ title: "Perfil" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </>
      )}
    </Stack.Navigator>
  );
}
