import React from "react";
import {
  Box,
  Divider,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import RestauranteImg from "../../../assets/restaurante.png";
import { ImageBackground, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

// import { Container } from './styles';

function DetalhesEstabelecimento({ open = true }) {
  const [verMais, setVerMais] = React.useState(false);
  const count = 3;
  return (
    <VStack flex={1}>
      {/* Estabelecimento Imagens */}
      <Box w="100%" h="240px" bg="primary.300">
        <ImageBackground
          source={RestauranteImg}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Box
            bgColor={
              open ? "rgba(86, 255, 106, 0.7)" : "rgba(255, 79, 79, 0.7)"
            }
            w="25%"
            h="18%"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="lg" color="white">
              {open ? "Aberto" : "Fechado"}
            </Text>
          </Box>
        </ImageBackground>
      </Box>
      {/* Fim estabelecimento imagens */}
      {/* Seção de preferencias */}
      <Box w="100%" h="100px" bg="primary.300" px={3} pt={3}>
        <Box w="100%" h="100%" bg="blue.200"></Box>
      </Box>
      {/* Fim seção preferencias */}
      {/* Informações estabelecimento */}
      <ScrollView>
        <VStack flex={1} px={3} py={5}>
          <Heading>Bar central da Vila Mariana</Heading>
          <HStack
            px={1}
            py={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack psace={1}>
              <MaterialIcons name="directions-walk" size={20} color="black" />
              <Text fontSize="md" fontWeight="semibold">
                2 km
              </Text>
            </HStack>
            <HStack space={1}>
              {[...Array(5)].map((dollar, index) => {
                if (index < count) {
                  return (
                    <FontAwesome5
                      key={index}
                      name="dollar-sign"
                      size={18}
                      color="#232323"
                    />
                  );
                }
                return (
                  <FontAwesome5
                    key={index}
                    name="dollar-sign"
                    size={18}
                    color="#BCBCBC"
                  />
                );
              })}
            </HStack>
            <HStack>
              {[...Array(5)].map((star, index) => {
                if (index < count) {
                  return (
                    <MaterialIcons
                      key={index}
                      name="star"
                      size={16}
                      color="#E1B578"
                    />
                  );
                }
                return (
                  <MaterialIcons
                    key={index}
                    name="star-outline"
                    size={16}
                    color="#E1B578"
                  />
                );
              })}
              <Text fontSize="sm" fontWeight="semibold">
                (200)
              </Text>
            </HStack>
          </HStack>
          {/* Descrição estabelecimento */}
          <Box>
            <Text fontSize="sm" pt={5} numberOfLines={!verMais && 3}>
              O bar central da Vila Madalena é conhecido por sua famosa camida
              de boteco, se você procura por um lugar com porções e bebidas
              geladas é aqui que vai encontrar. Um ambiente descontraido, com
              espaços a céu aberto o bar conta com uma ocupação de mais de 200
              pessoas. O bar central da Vila Madalena é conhecido por sua famosa
              camida de boteco, se você procura por um lugar com porções e
              bebidas geladas é aqui que vai encontrar.
            </Text>
            <Box w="100%" justifyContent="flex-end" alignItems="flex-end">
              <Pressable onPress={() => setVerMais(!verMais)}>
                <Text fontSize="xs" color="secondaryLocal">
                  Ver {verMais ? "menos" : "mais..."}
                </Text>
              </Pressable>
            </Box>
          </Box>
          {/* Fim descrição estabelecimento */}
          {/* Seção de infos */}
          <Divider my={3} />
          <Heading fontSize="md">Localização</Heading>
          <HStack my={2}>
            <MaterialIcons name="location-on" size={20} color="black" />
            <Text fontSize="sm" ml={2} fontWeight="bold">
              Rua da Vila Mariana, 402 - Vila Mariana
            </Text>
          </HStack>
          <Divider my={3} />
          <Heading fontSize="md">Informações de contato</Heading>
          <HStack my={2} justifyContent="space-between">
            <HStack>
              <FontAwesome5 name="instagram" size={20} color="black" />
              <Text fontSize="sm" ml={2} fontWeight="bold" s>
                @barcentralvmariana
              </Text>
            </HStack>
            <HStack>
              <MaterialIcons name="local-phone" size={20} color="black" />
              <Text fontSize="sm" ml={2} fontWeight="bold">
                (11) 99999-9999
              </Text>
            </HStack>
          </HStack>
          <Divider my={3} />
          <Heading fontSize="md">Horário de funcionamento</Heading>
          <HStack my={2}>
            <MaterialIcons name="schedule" size={20} color="black" />
            <Text fontSize="sm" ml={2}>
              Seg a Dom - 08:00 as 22:00
            </Text>
          </HStack>
        </VStack>
        <Box
          w="100%"
          h="50px"
          px={3}
          py={3}
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Pressable>
            <Box
              w="40%"
              h="100%"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              bgColor="primaryLocal"
              borderRadius={5}
              p={5}
            >
              <Text fontSize="sm" color="#fff">
                Como chegar
              </Text>
              <MaterialIcons name="arrow-forward-ios" color="#fff" />
            </Box>
          </Pressable>
        </Box>
      </ScrollView>
      {/* Fim informações estabelecimento */}
      {/* Footer */}
      {/* Fim footer */}
    </VStack>
  );
}

export default DetalhesEstabelecimento;
