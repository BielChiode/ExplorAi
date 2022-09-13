import React from "react";
import { Box, HStack, Pressable, Text } from "native-base";
import { ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import RestauranteImg from "../../../assets/restaurante.png";
import PreferenciaItem from "../../components/PreferenciaItem";

function CardHome({ open = false, onPress }) {
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
          Bar central da Vila Madalena
        </Text>
        <HStack px={1} py={1} justifyContent="center" alignItems="center">
          <MaterialIcons name="directions-walk" size={16} color="black" />
          <Text fontSize="sm" fontWeight="semibold">
            2 km
          </Text>
          <HStack mx={3}>
            <FontAwesome5 name="dollar-sign" size={14} color="#232323" />
            <FontAwesome5 name="dollar-sign" size={14} color="#232323" />
            <FontAwesome5 name="dollar-sign" size={14} color="#232323" />
            <FontAwesome5 name="dollar-sign" size={14} color="#BCBCBC" />
            <FontAwesome5 name="dollar-sign" size={14} color="#BCBCBC" />
          </HStack>
          <Text fontSize="sm" fontWeight="semibold">
            4
          </Text>
          <MaterialIcons name="star" size={16} color="yellow" />
          <Text fontSize="sm" fontWeight="semibold">
            (200)
          </Text>
        </HStack>
        <HStack w="100%" h="100%" p={1} space="2%" flexWrap="wrap">
          <PreferenciaItem titulo="Música ao vivo" width="48%" />
          <PreferenciaItem titulo="Churrasco" width="48%" />
          <PreferenciaItem titulo="Drinks" width="48%" />
          <PreferenciaItem titulo="Pet Friendly" width="48%" />
        </HStack>
      </Box>
    </Pressable>
  );
}

export default CardHome;
