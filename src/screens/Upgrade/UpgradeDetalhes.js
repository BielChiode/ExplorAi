import {
  Box,
  Button,
  Divider,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { ImageBackground } from "react-native";
import PreferenciaItem from "../../components/PreferenciaItem";
import { MaterialIcons } from "@expo/vector-icons";

function UpgradeDetalhes() {
  return (
    <ScrollView>
      <VStack flex={1} px={5}>
        <Box w="100%" h="200px" my={5}>
          <ImageBackground
            source={require("../../../assets/upgrade-diamante.png")}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          >
            <Box
              w="100%"
              h="100%"
              bgColor="secondaryLocal"
              opacity={0.5}
              borderRadius={40}
              // shadow={4}
            ></Box>
          </ImageBackground>
        </Box>
        <Box w="100%" alignItems="center">
          <Text fontSize="lg" fontWeight="bold">
            Plano 1
          </Text>
        </Box>
        <Box w="100%" alignItems="flex-start" mt={5}>
          <PreferenciaItem
            titulo={"Característica x"}
            checked={true}
            width="40%"
            height="30px"
            fontSizeTitulo="14px"
          />
          <Text fontSize="xs" pl={2}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'.
          </Text>
        </Box>
        <Box w="100%" alignItems="flex-start" mt={5}>
          <PreferenciaItem
            titulo={"Característica x"}
            checked={true}
            width="40%"
            height="30px"
            fontSizeTitulo="14px"
          />
          <Text fontSize="xs" pl={2}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </Text>
        </Box>
        <Divider my={3} />
        <Box w="100%">
          <Text>Tudo isso por apenas:</Text>
          <Box
            w="120px"
            h="120px"
            bgColor="secondaryLocal"
            rounded="full"
            alignSelf="center"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="2xl" color="#fff">
              R$49,90
            </Text>
          </Box>
        </Box>
        <Box w="100%" my={5}>
          <Button
            onPress={() => console.log("oi")}
            bg="#6EFAAC"
            w="70%"
            alignSelf="center"
            leftIcon={
              <Icon
                as={<MaterialIcons name="upgrade" size={24} color="white" />}
                name="cloud-upload-outline"
                size="sm"
              />
            }
          >
            Fazer upgrade
          </Button>
        </Box>
      </VStack>
    </ScrollView>
  );
}

export default UpgradeDetalhes;
