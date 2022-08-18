import {
  Avatar,
  Box,
  Center,
  HStack,
  Image,
  ScrollView,
  Text,
  useTheme,
  VStack,
} from "native-base";
import React from "react";
import useAuth from "../../hooks/useAuth";
import UserImg from "../../../assets/gabriel.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import CardHome from "./CardHome";
import FooterItem from "../../components/FooterItem";

export default function Home({ navigation }) {
  const { user } = useAuth();

  function handleNavigate() {
    navigation.navigate("DetalhesEstabelecimento");
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
          <Avatar bg="amber.500" size="md" source={UserImg}>
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
      <HStack
        w="100%"
        h="70px"
        bg="#fff"
        borderTopWidth={1}
        borderTopColor="#DED3D4"
      >
        <FooterItem iconName="home-filled" activeItem={true} />
        <Box w="33%" h="100%" justifyContent="center" alignItems="center">
          <Box
            bgColor="secondaryLocal"
            p={4}
            mt={-50}
            rounded="full"
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.5,
              shadowRadius: 3.84,

              elevation: 10,
            }}
          >
            <MaterialIcons name={"search"} size={40} color="#fff" />
          </Box>
        </Box>
        <FooterItem iconName="person-outline" />
      </HStack>
    </VStack>
  );
}