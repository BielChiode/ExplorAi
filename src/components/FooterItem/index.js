import React from "react";
import { Box, useTheme, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Pressable } from "react-native";

function FooterItem({ iconName, activeItem, onPressItem, ...styleBox }) {
  const theme = useTheme();

  return (
    <Box
      {...styleBox}
      w="33%"
      h="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Pressable onPress={onPressItem}>
        <VStack>
          <MaterialIcons
            name={iconName}
            size={40}
            color={
              activeItem ? theme.colors.primaryLocal : theme.colors.grayLocal
            }
          />
          <Box
            w="10px"
            h="10px"
            bg="primaryLocal"
            rounded="full"
            alignSelf="center"
            display={activeItem ? "flex" : "none"}
          ></Box>
        </VStack>
      </Pressable>
    </Box>
  );
}

export default FooterItem;
