import React from "react";
import { Box, Text, useTheme } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable } from "react-native";

function PreferenciaItem({
  checkedProp = false,
  titulo,
  width,
  height = "20px",
  fontSizeTitulo = "10px",
  onPressPreferencia,
  heightPreferencia = "20px",
}) {
  // const [checked, setChecked] = React.useState(false);
  const theme = useTheme();
  return (
    <Box w={width} h={height}>
      <Pressable
        onPress={() => {
          onPressPreferencia(titulo.toLowerCase());
        }}
      >
        <Box
          bg={checkedProp ? "secondaryLocal" : "whiteLocal"}
          h={heightPreferencia}
          rounded="lg"
          overflow="hidden"
          numberOfLines={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          mb={1}
          shadow={4}
        >
          <Box
            w="10%"
            h="100%"
            justifyContent="center"
            position="absolute"
            left={1}
          >
            {/* <Pressable onPress={() => onPressPreferencia(titulo.toLowerCase())}> */}
            <FontAwesome5
              name={checkedProp ? "check" : "minus"}
              size={8}
              color={
                checkedProp ? theme.colors.whiteLocal : theme.colors.secondaryLocal
              }
            />
            {/* </Pressable> */}
          </Box>
          <Text
            fontSize={fontSizeTitulo}
            color={checkedProp ? "whiteLocal" : "secondaryLocal"}
            ml={2.5}
          >
            {titulo}
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
}

export default PreferenciaItem;
