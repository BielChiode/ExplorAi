import {
  Avatar,
  Box,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import useAuth from "../../hooks/useAuth";
import CardHome from "./CardHome";
import Footer from "../../components/Footer";
import { Estabelecimentos } from "../../../data/estabelecimentos";
import { MaterialIcons } from "@expo/vector-icons";
import PreferenciaItem from "../../components/PreferenciaItem";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function HomeUsuario() {
  const estabelecimentos = Estabelecimentos;

  const { user } = useAuth();
  const [preferenciasUser, setPreferenciasUser] = React.useState(
    user.preferencias
  );

  const navigation = useNavigation();

  const handleNavigateFooter = (page) => {
    navigation.navigate(page);
  };

  function handleNavigate(estabelecimento) {
    navigation.navigate("DetalhesEstabelecimento", {
      estabelecimento,
    });
  }
  useEffect(() => {
    if (user.preferencias) setPreferenciasUser(user.preferencias);
  }, [user.preferencias]);

  return (
    <VStack flex={1} bg="coolGray.50" safeArea>
      <ScrollView>
        {user.active ? (
          <>
            <HStack h="70px" w="100%">
              <VStack ml={3}>
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
            {user.preferencias.length > 0 && (
              <Box w="100%" px={2}>
                <HStack>
                  <Text fontSize="md" ml={1}>
                    Minhas preferências:
                  </Text>
                  <Text
                    fontSize="md"
                    position="absolute"
                    right="10px"
                    color="grayLocal"
                  >
                    6/6
                  </Text>
                </HStack>
                <HStack mt={5} space="3%" flexWrap="wrap">
                  {user.preferencias.map((preferencia, index) => {
                    return (
                      <PreferenciaItem
                        key={index}
                        titulo={
                          preferencia.charAt(0).toUpperCase() +
                          preferencia.slice(1)
                        }
                        checkedProp={true}
                        width="30%"
                        height="30px"
                        fontSizeTitulo="12px"
                      />
                    );
                  })}
                </HStack>
              </Box>
            )}
          </>
        ) : (
          <>
            <HStack h="50px" w="100%">
              <Text fontSize="md" color="grayLocal" numberOfLines={2} p={2}>
                Faça login e melhore sua experiência no app!
              </Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Box
                  w="30px"
                  h="30px"
                  bgColor="muted.300"
                  rounded="full"
                  alignItems="center"
                  justifyContent="center"
                  mt={2}
                >
                  <MaterialIcons name="logout" size={14} color="#525252" />
                </Box>
              </Pressable>
            </HStack>
            {user.preferencias.length > 0 && (
              <Box w="100%" px={2}>
                <HStack>
                  <Text fontSize="md" ml={1}>
                    Minhas preferências:
                  </Text>
                  <Text
                    fontSize="md"
                    position="absolute"
                    right="10px"
                    color="grayLocal"
                  >
                    6/6
                  </Text>
                </HStack>
                <HStack mt={5} space="3%" flexWrap="wrap">
                  {user.preferencias.map((preferencia, index) => {
                    return (
                      <PreferenciaItem
                        key={index}
                        titulo={preferencia}
                        checkedProp={true}
                        width="30%"
                        height="30px"
                        fontSizeTitulo="12px"
                      />
                    );
                  })}
                </HStack>
              </Box>
            )}
          </>
        )}
        {/* Body */}
        <HStack
          flexWrap="wrap"
          space="2%"
          // justifyContent="center"
          px={3}
          py={10}
        >
          {/* Cards begin */}
          {estabelecimentos.map((estabelecimento, index) => {
            return (
              <CardHome
                key={index}
                preferenciasUser={preferenciasUser}
                nome={estabelecimento.nome}
                open={estabelecimento.open}
                avaliacao={estabelecimento.avaliacao}
                caracteristicas={estabelecimento.caracteristicas}
                distancia={estabelecimento.distancia}
                image={estabelecimento.image}
                onPress={() => handleNavigate(estabelecimento)}
              />
            );
          })}
        </HStack>
      </ScrollView>
      {/* Fim Cards */}
      {/* Fim Body */}
      <Footer onPressItem={handleNavigateFooter} />
    </VStack>
  );
}
