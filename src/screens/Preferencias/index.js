import {
  Box,
  Button,
  Divider,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import PreferenciaItem from "../../components/PreferenciaItem";
import { Preferencias } from "../../../data/preferencias";
import useAuth from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function PreferenciasScreen({ titulo = "Qual sua vontade agora ?" }) {
  const [checked, setChecked] = useState({});

  const navigation = useNavigation();
  const preferencias = Preferencias;
  const { setPreferenciasUsuario } = useAuth();
  const [preferenciasEscolhidas, setPreferenciasEscolhidas] = useState([]);

  const handlePress = (nome) => {
    let preferencias;
    let repetido = preferenciasEscolhidas.filter(
      (preferencia) => preferencia === nome
    );
    if (repetido.length > 0) {
      preferencias = preferenciasEscolhidas.filter(
        (preferencia) => preferencia !== nome
      );
      setPreferenciasEscolhidas(preferencias);
      setChecked({ ...checked, [nome]: false });
      return;
    }
    setPreferenciasEscolhidas([...preferenciasEscolhidas, nome]);
    setChecked({ ...checked, [nome]: true });
    return;
  };

  return (
    <ScrollView>
      <VStack flex={1} px={3} bg="coolGray.50">
        <Box mt={5} mb={5}>
          <Text fontSize={18} fontWeight="bold">
            {titulo}
          </Text>
        </Box>
        <SecaoPreferencia
          titulo={"Ambiente"}
          preferencias={preferencias.ambientes}
          onPressPreferencia={handlePress}
          checked={checked}
        />
        <SecaoPreferencia
          titulo={"Comidas"}
          preferencias={preferencias.comidas}
          onPressPreferencia={handlePress}
          checked={checked}
        />
        <SecaoPreferencia
          titulo={"Bebidas"}
          preferencias={preferencias.bebidas}
          onPressPreferencia={handlePress}
          checked={checked}
        />
        <SecaoPreferencia
          titulo={"Tipos"}
          preferencias={preferencias.tipos}
          onPressPreferencia={handlePress}
          checked={checked}
        />
      </VStack>
      <Box w="100%" mb={5}>
        <Button
          onPress={() => {
            setPreferenciasUsuario(preferenciasEscolhidas);
            navigation.navigate("Home");
          }}
          bg="primaryLocal"
          w="70%"
          alignSelf="center"
        >
          Salvar
        </Button>
      </Box>
    </ScrollView>
  );
}

function SecaoPreferencia({
  titulo,
  preferencias,
  onPressPreferencia,
  checked,
}) {
  return (
    <VStack w="100%" mb={3}>
      <Text fontSize={16}>{titulo}</Text>
      <HStack mt={5} space="3%" flexWrap="wrap">
        {preferencias.map((preferencia, index) => {
          return (
            <PreferenciaItem
              key={index}
              titulo={preferencia}
              onPressPreferencia={onPressPreferencia}
              checkedProp={checked[preferencia.toLowerCase()] || false}
              width="30%"
              height="30px"
              fontSizeTitulo="12px"
            />
          );
        })}
      </HStack>
      <Divider my={2} />
    </VStack>
  );
}

export default PreferenciasScreen;
