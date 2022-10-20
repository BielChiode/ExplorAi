import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import PreferenciaItem from "../../components/PreferenciaItem";

function Upgrade() {
  const navigation = useNavigation();

  let imgOuro = require("../../../assets/upgrade-ouro.png");
  let imgDiamante = require("../../../assets/upgrade-diamante.png");
  return (
    <VStack flex={1}>
      <Center>
        <Pressable onPress={() => navigation.navigate("UpgradeDetalhes")}>
          <Box
            //   bg="amber.200"
            w="80%"
            alignItems="center"
            borderRadius={15}
            my={5}
            py={2}
            borderWidth={1}
            borderColor="grayLocal"
          >
            <Image
              source={imgOuro}
              alt="Upgrade plano ouro"
              w="200px"
              h="200px"
            />
            <Text fontWeight="bold" fontSize={20}>
              Plano 1
            </Text>
            <HStack mt={5} ml={3} space="5%" flexWrap="wrap">
              <PreferenciaItem
                titulo={"Característica x"}
                checkedProp={true}
                width="45%"
                height="30px"
                fontSizeTitulo="12px"
              />
              <PreferenciaItem
                titulo={"Característica x"}
                checkedProp={true}
                width="45%"
                height="30px"
                fontSizeTitulo="12px"
              />
              <PreferenciaItem
                titulo={"Característica x"}
                checkedProp={true}
                width="45%"
                height="30px"
                fontSizeTitulo="12px"
              />
              <PreferenciaItem
                titulo={"Característica x"}
                checkedProp={true}
                width="45%"
                height="30px"
                fontSizeTitulo="12px"
              />
            </HStack>
          </Box>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("UpgradeDetalhes")}>
          <Box
            //   bg="amber.200"
            w="80%"
            alignItems="center"
            borderRadius={15}
            py={2}
            borderWidth={1}
            borderColor="grayLocal"
          >
            <Image
              source={imgDiamante}
              alt="Upgrade plano diamante"
              w="200px"
              h="200px"
            />
            <Text fontWeight="bold" fontSize={20}>
              Plano 2
            </Text>
            <HStack mt={5} ml={3} space="5%" flexWrap="wrap">
              <PreferenciaItem
                titulo={"Característica x"}
                checkedProp={true}
                width="45%"
                height="30px"
                fontSizeTitulo="12px"
              />
              <PreferenciaItem
                titulo={"Característica x"}
                checkedProp={true}
                width="45%"
                height="30px"
                fontSizeTitulo="12px"
              />
              <PreferenciaItem
                titulo={"Característica x"}
                checkedProp={true}
                width="45%"
                height="30px"
                fontSizeTitulo="12px"
              />
              <PreferenciaItem
                titulo={"Característica x"}
                checkedProp={true}
                width="45%"
                height="30px"
                fontSizeTitulo="12px"
              />
            </HStack>
          </Box>
        </Pressable>
      </Center>
    </VStack>
  );
}

export default Upgrade;
