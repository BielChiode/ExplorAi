import React from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Pressable,
  Text,
  useTheme,
  VStack,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import Preferencias from "../Preferencias";

function Onboarding({ navigation }) {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    if (page == 4) {
      return navigation.navigate("Home");
    }
    setPage(page + 1);
    console.log(page);
  };
  switch (page) {
    case 1:
      return <Page1 nextPage={nextPage} />;
    case 2:
      return <Page2 nextPage={nextPage} />;
    case 3:
      return <Page3 nextPage={nextPage} />;
    default:
      break;
  }
}

function Page1({ nextPage }) {
  return (
    <VStack flex={1} px={5}>
      <Box
        w="100%"
        h="50%"
        // borderWidth={1}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Text fontSize="4xl" fontWeight="bold" color="#000">
          Explor
          <Text fontSize="4xl" fontWeight="bold" color="#FA3523">
            Aí
          </Text>
        </Text>
        <Text fontSize="md" color="coolGray.800">
          Qual sua vontade hoje?
        </Text>
      </Box>
      <Box w="100%" h="50%" justifyContent="flex-end" alignItems="center">
        <Pressable onPress={nextPage}>
          <Box w="100%" h="60px" alignItems="center" mb={5}>
            <Box
              w="250px"
              h="100%"
              justifyContent="center"
              alignItems="center"
              bgColor="primaryLocal"
              borderRadius={10}
            >
              <Text fontSize="lg" color="#fff">
                Começar
              </Text>
            </Box>
          </Box>
        </Pressable>
      </Box>
    </VStack>
  );
}

function Page2({ nextPage }) {
  const theme = useTheme();
  const img = require("../../../assets/onboarding.png");
  return (
    <VStack flex={1} px={5}>
      <Box w="100%" h="40%" mt={10}>
        <Image
          source={img}
          alt="Bem vindo"
          w="full"
          h="80%"
          resizeMode="contain"
        />
      </Box>
      <VStack w="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Bem vindo!
        </Text>
        <Text fontSize="lg" mt={10} color="coolGray.600">
          Bem vindo ao app do Explora Aí, aqui vamos te ajudar a encontrar o
          melhor lugar para você conhecer de acordo com as suas preferências
        </Text>
        <HStack mt={20}>
          <Text fontSize="xs" color="coolGray.600">
            Já possui uma conta ?
          </Text>
          <Link
            _text={{
              color: "secondaryLocal",
              fontWeight: "medium",
              fontSize: "xs",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            Acesse aqui
          </Link>
        </HStack>
      </VStack>
      <HStack flex={1} justifyContent="flex-end" alignItems="flex-end" mb={8}>
        <HStack space={2} w="20%">
          <FontAwesome
            name="circle-o"
            color={theme.colors.primaryLocal}
            size={10}
          />
          <FontAwesome
            name="circle"
            color={theme.colors.primaryLocal}
            size={10}
          />
          <FontAwesome
            name="circle-o"
            color={theme.colors.primaryLocal}
            size={10}
          />
        </HStack>
        <Box w="80%" alignItems="flex-end">
          <Pressable onPress={nextPage}>
            <Box
              w="50px"
              h="50px"
              bgColor="primaryLocal"
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
            >
              <FontAwesome name="chevron-right" size={18} color="#fff" />
            </Box>
          </Pressable>
        </Box>
      </HStack>
    </VStack>
  );
}

function Page3({ nextPage }) {
  const theme = useTheme();
  return (
    <VStack flex={1} px={3} bg="coolGray.50">
      <Box w="100%" h="90%">
        <Preferencias titulo="O que você busca em um local ?" />
      </Box>
      <Box w="100%" h="10%">
        <HStack flex={1} justifyContent="flex-end" alignItems="flex-end" mb={8}>
          <HStack space={2} w="20%">
            <FontAwesome
              name="circle-o"
              color={theme.colors.primaryLocal}
              size={10}
            />
            <FontAwesome
              name="circle-o"
              color={theme.colors.primaryLocal}
              size={10}
            />
            <FontAwesome
              name="circle"
              color={theme.colors.primaryLocal}
              size={10}
            />
          </HStack>
          <Box w="80%" alignItems="flex-end">
            <Pressable onPress={nextPage}>
              <Box
                w="50px"
                h="50px"
                bgColor="primaryLocal"
                borderRadius="full"
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesome name="chevron-right" size={20} color="#fff" />
              </Box>
            </Pressable>
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
}

export default Onboarding;
