import { Box, Center, Heading, Image, Pressable, Text } from "native-base";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

function EstabUsuario({ goToMenu }) {
  return (
    <Center flex={1} w="100%">
      <Pressable onPress={() => goToMenu("usuario")}>
        <Box w="70%" h={150} borderRadius={20} style={styles.boxShadow}>
          <Image
            borderRadius={20}
            flex={1}
            source={require("../../../assets/usuario.png")}
            alt="Imagem de usuario"
          />
        </Box>
      </Pressable>
      <Heading size="md" fontWeight="600" color="coolGray.800" mt="1">
        Usuário
      </Heading>
      <Pressable onPress={() => goToMenu("estabelecimento")}>
        <Box w="70%" h={150} borderRadius={20} mt="10" style={styles.boxShadow}>
          <Image
            flex={1}
            borderRadius={20}
            source={require("../../../assets/estabelecimento.png")}
            alt="Imagem de estabelecimento"
          />
        </Box>
      </Pressable>
      <Heading size="md" fontWeight="600" color="coolGray.800" mt="1">
        Estabelecimento
      </Heading>
    </Center>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default EstabUsuario;
