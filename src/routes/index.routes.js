import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Cadastro from "../screens/Cadastro";
import DetalhesEstabelecimento from "../screens/DetalhesEstabelecimento";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Onboarding from "../screens/Onboarding";
import Perfil from "../screens/Perfil";
import Preferencias from "../screens/Preferencias";
import Upgrade from "../screens/Upgrade";
import UpgradeDetalhes from "../screens/Upgrade/UpgradeDetalhes";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
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
      <Stack.Screen
        name="Upgrade"
        component={Upgrade}
        options={{ title: "Upgrade" }}
      />
      <Stack.Screen
        name="UpgradeDetalhes"
        component={UpgradeDetalhes}
        options={{ title: "Upgrade Detalhes" }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
