import { Avatar, Box, HStack, ScrollView, Text, VStack } from "native-base";
import React from "react";
import useAuth from "../../hooks/useAuth";
import UserImg from "../../../assets/gabriel.jpg";
import CardHome from "./CardHome";
import Footer from "../../components/Footer";

export default function HomeUsuario({ navigations }) {
  const { user } = useAuth();

  const handleNavigateFooter = (page) => {
    navigations.navigate(page);
  };

  function handleNavigate() {
    navigations.navigate("DetalhesEstabelecimento");
  }
  return (
    <VStack flex={1} bg="coolGray.50" safeArea>
      {/* Header Begin */}
      <HStack h="100px" w="100%">
        <VStack ml={1}>
          <Text fontSize="md" color="grayLocal">
            Bem vindo de volta
          </Text>
          <Text fontSize="lg" fontWeight="bold" mt={1}>
            {user.name}
          </Text>
        </VStack>
        <Box w="100%" h="100%" alignItems="center">
          <Avatar bg="amber.500" size="md" source={{ uri: user.imagem }}>
            Usuário
          </Avatar>
        </Box>
      </HStack>
      {/* Header end */}
      {/* Sessão preferencias */}
      <HStack w="100%" h="150px" bg="amber.100">
        <Text fontSize="md" ml={1}>
          Hoje estou em busca de:
        </Text>
        <Text fontSize="md" position="absolute" right="10px" color="grayLocal">
          5/5
        </Text>
      </HStack>
      {/* Fim sessão preferencias */}
      {/* Body */}
      <ScrollView>
        <HStack
          flexWrap="wrap"
          space="2%"
          // justifyContent="center"
          px={3}
          py={10}
        >
          {/* Cards begin */}
          <CardHome open={true} onPress={handleNavigate} />
          <CardHome open={true} />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
        </HStack>
      </ScrollView>
      {/* Fim Cards */}
      {/* Fim Body */}
      <Footer onPressItem={handleNavigateFooter} />
    </VStack>
  );
}
