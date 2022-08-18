import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import useAuth from "../hooks/useAuth";
import Cadastro from "../screens/Cadastro";
import DetalhesEstabelecimento from "../screens/DetalhesEstabelecimento";
import Home from "../screens/Home";
import Login from "../screens/Login";

const Stack = createStackNavigator();

export default function Navigator() {
  const { user } = useAuth();
  return (
    <Stack.Navigator initialRouteName="Home">
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
