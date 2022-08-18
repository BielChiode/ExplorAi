import { Center, Spinner } from "native-base";
import React from "react";

// import { Container } from './styles';

function Loading() {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner color="secondaryLocal" />
    </Center>
  );
}

export default Loading;
