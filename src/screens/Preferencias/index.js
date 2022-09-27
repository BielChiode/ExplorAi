import { Box, Divider, HStack, Text, VStack } from "native-base";
import React from "react";
import PreferenciaItem from "../../components/PreferenciaItem";

function Preferencias({ titulo = "Qual sua vontade agora ?" }) {
  return (
    <VStack flex={1} px={2} bg="coolGray.50" safeArea>
      <Box mt={5} mb={5}>
        <Text fontSize={18} fontWeight="bold">
          {titulo}
        </Text>
      </Box>
      <SecaoPreferencia titulo={"Ambiente"} />
      <SecaoPreferencia titulo={"Ambiente"} />
      <SecaoPreferencia titulo={"Ambiente"} />
    </VStack>
  );
}

function SecaoPreferencia({ titulo }) {
  return (
    <VStack w="100%" mb={3}>
      <Text fontSize={16}>{titulo}</Text>
      <HStack mt={5} space="3%" flexWrap="wrap">
        <PreferenciaItem titulo={"Musica ao vivo"} checked={true} width="30%" />
        <PreferenciaItem
          titulo={"Musica ao vivo"}
          checked={false}
          width="30%"
        />
        <PreferenciaItem titulo={"Musica ao vivo"} checked={true} width="30%" />
        <PreferenciaItem titulo={"Musica ao vivo"} checked={true} width="30%" />
        <PreferenciaItem
          titulo={"Musica ao vivo"}
          checked={false}
          width="30%"
        />
        <PreferenciaItem
          titulo={"Musica ao vivo"}
          checked={false}
          width="30%"
        />
        <PreferenciaItem titulo={"Musica ao vivo"} checked={true} width="30%" />
        <PreferenciaItem
          titulo={"Musica ao vivo"}
          checked={false}
          width="30%"
        />
        <PreferenciaItem titulo={"Musica ao vivo"} checked={true} width="30%" />
      </HStack>
      <Divider my={2} />
    </VStack>
  );
}

export default Preferencias;
