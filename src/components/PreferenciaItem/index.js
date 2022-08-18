import React from "react";
import { Box, Text, useTheme } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

// import { Container } from './styles';

function PreferenciaItem({ checked = true, titulo }) {
  const theme = useTheme();
  return (
    <Box
      w="48%"
      h="20px"
      bg={checked ? "secondaryLocal" : "whiteLocal"}
      rounded="lg"
      overflow="hidden"
      numberOfLines={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      mb={1}
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
        fontSize="10px"
        color={checked ? "whiteLocal" : "secondaryLocal"}
        ml={2.5}
      >
        {titulo}
      </Text>
    </Box>
  );
}

export default PreferenciaItem;
