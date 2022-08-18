import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import Navigator from "./src/routes/index.routes";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/hooks/useAuth";
import { THEME } from "./src/styles/theme";
import Loading from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <NavigationContainer>
          <AuthProvider>
            <Navigator />
          </AuthProvider>
        </NavigationContainer>
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  );
}
