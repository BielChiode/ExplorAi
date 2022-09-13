import {
  Avatar,
  Box,
  FormControl,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "native-base";
import React from "react";
import useAuth from "../../hooks/useAuth";
import UserImg from "../../../assets/gabriel.jpg";
import { MaterialIcons } from "@expo/vector-icons";

// import { Container } from './styles';

function Perfil() {
  const [show, setShow] = React.useState(false);
  const [nome, setNome] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [senha, setSenha] = React.useState(null);
  const { user } = useAuth();

  return (
    <VStack flex={1} bg="coolGray.50" px={2}>
      <HStack h="100px" w="100%">
        <VStack ml={1} mt={2}>
          <Text fontSize="md" color="grayLocal">
            Olá,
          </Text>
          <Text fontSize="lg" fontWeight="bold" mt={1}>
            {user.name}
          </Text>
        </VStack>
        <Box w="80%" mt={2} alignItems="flex-end">
          <Avatar bg="amber.500" size="md" source={UserImg}>
            Usuário
          </Avatar>
        </Box>
      </HStack>
      <Text fontSize="lg" fontWeight="bold" mt={5}>
        Minhas preferências
      </Text>

      <Box w="100%">
        <VStack space={3} mt="5">
          <Text fontSize="lg" fontWeight="bold">
            Meus dados
          </Text>
          <FormControl>
            <FormControl.Label>Nome</FormControl.Label>
            <Input
              type="text"
              value={"Gabriel Chiode"}
              isDisabled={true}
              onChangeText={(e) => setNome(e)}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              value="seu@email.com"
              type="email"
              isDisabled={true}
              onChangeText={(e) => setEmail(e)}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              type={show ? "text" : "password"}
              InputLeftElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
              value={"*************"}
              isDisabled={true}
              onChangeText={(e) => setSenha(e)}
              onPress={() => setShow(!show)}
            />
          </FormControl>
        </VStack>
      </Box>
    </VStack>
  );
}

export default Perfil;
