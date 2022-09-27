import { Box, HStack } from "native-base";
import React from "react";
import FooterItem from "../FooterItem";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

// import { Container } from './styles';

function Footer({ onPressItem }) {
  return (
    <HStack
      w="100%"
      h="70px"
      bg="#fff"
      borderTopWidth={1}
      borderTopColor="#DED3D4"
    >
      <FooterItem
        iconName="home-filled"
        activeItem={true}
        onPressItem={() => onPressItem("Home")}
      />
      <Box w="33%" h="100%" justifyContent="center" alignItems="center">
        <Pressable onPress={() => onPressItem("Preferencias")}>
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
        </Pressable>
      </Box>
      <FooterItem
        iconName="person-outline"
        onPressItem={() => onPressItem("Perfil")}
      />
    </HStack>
  );
}

export default Footer;
