import React from "react";
import { Box, Text, useTheme } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

// import { Container } from './styles';

function PreferenciaItem({
  checked = true,
  titulo,
  width,
  height = "20px",
  fontSizeTitulo = "10px",
}) {
  const theme = useTheme();
  return (
    <Box
      w={width}
      h={height}
      bg={checked ? "secondaryLocal" : "whiteLocal"}
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
        <FontAwesome5
          name={checked ? "check" : "minus"}
          size={8}
          color={
            checked ? theme.colors.whiteLocal : theme.colors.secondaryLocal
          }
        />
      </Box>
      <Text
        fontSize={fontSizeTitulo}
        color={checked ? "whiteLocal" : "secondaryLocal"}
        ml={2.5}
      >
        {titulo}
      </Text>
    </Box>
  );
}

export default PreferenciaItem;
