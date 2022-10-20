import React from "react";
import { Box, HStack, Pressable, Text } from "native-base";
import { ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PreferenciaItem from "../../components/PreferenciaItem";
import { useEffect } from "react";
import { useState } from "react";

function CardHome({
  open,
  nome,
  distancia,
  avaliacao,
  caracteristicas,
  preferenciasUser,
  image,
  onPress,
}) {
  const [mapa, setMapa] = useState({});

  useEffect(() => {
    let novoMapa = {};
    let caracLower = caracteristicas.map((carac) => carac.toLowerCase());
    let teste = caracLower.filter(
      (carac) => preferenciasUser.indexOf(carac) !== -1
    );
    teste.forEach((teste2) => {
      novoMapa[teste2] = true;
    });
    setMapa(novoMapa);
  }, [preferenciasUser, caracteristicas]);
  return (
    <Pressable w="48%" onPress={onPress}>
      <Box
        shadow={6}
        bg="whiteLocal"
        height="220px"
        rounded="lg"
        mb={3}
        overflow="hidden"
      >
        <Box w="100%" h="50%">
          <ImageBackground
            source={{ uri: image }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <Box
              bgColor={open ? "#34FF48" : "#FF3434"}
              w="30%"
              h="20px"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize="xs" color="white">
                {open ? "Aberto" : "Fechado"}
              </Text>
            </Box>
          </ImageBackground>
        </Box>
        <Text fontSize="sm" fontWeight="bold" numberOfLines={1} mx={1}>
          {nome}
        </Text>
        <HStack px={1} py={1} justifyContent="center" alignItems="center">
          <MaterialIcons name="directions-walk" size={16} color="black" />
          <Text fontSize="sm" fontWeight="semibold">
            {distancia} km
          </Text>
          <HStack mx={3}>
            <FontAwesome5 name="dollar-sign" size={14} color="#232323" />
            <FontAwesome5 name="dollar-sign" size={14} color="#232323" />
            <FontAwesome5 name="dollar-sign" size={14} color="#232323" />
            <FontAwesome5 name="dollar-sign" size={14} color="#BCBCBC" />
            <FontAwesome5 name="dollar-sign" size={14} color="#BCBCBC" />
          </HStack>
          <Text fontSize="sm" fontWeight="semibold">
            {avaliacao}
          </Text>
          <MaterialIcons name="star" size={16} color="yellow" />
          <Text fontSize="sm" fontWeight="semibold">
            (200)
          </Text>
        </HStack>
        <HStack w="100%" h="100%" p={1} space="2%" flexWrap="wrap">
          {caracteristicas.map((caracteristica, index) => {
            return (
              <PreferenciaItem
                key={index}
                titulo={caracteristica}
                width="48%"
                checkedProp={mapa[caracteristica.toLowerCase()] || false}
              />
            );
          })}
        </HStack>
      </Box>
    </Pressable>
  );
}

export default CardHome;
