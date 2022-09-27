import React from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  Text,
  TextArea,
  VStack,
} from "native-base";
import useAuth from "../../hooks/useAuth";
import { MaterialIcons } from "@expo/vector-icons";

function PerfilEstabelecimento({navigationProp}) {
  const avatar = require("../../../assets/gabriel.jpg");
  const [show, setShow] = React.useState(false);
  const [nome, setNome] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [senha, setSenha] = React.useState(null);
  const { user } = useAuth();
  return (
    <>
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
          <Box w="100%" mt={2} alignItems="center">
            <Avatar bg="amber.500" size="md" source={{uri: user.imagem}}>
              Usuário
            </Avatar>
          </Box>
        </HStack>

        <Box w="100%">
          <VStack space={3} mt="5">
            <Text fontSize="lg" fontWeight="bold">
              Meus dados
            </Text>
            <FormControl>
              <FormControl.Label>Nome</FormControl.Label>
              <Input
                type="text"
                value={"Bar da Vila"}
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
            <FormControl>
              <FormControl.Label>Descrição</FormControl.Label>
              <TextArea
                h={20}
                type="text"
                value={
                  "Bar aconchegante com ambiente aberto e música ao vivo, perfeito para reunir a familia e amigos. Com drinks diferenciados e porções que agradam a qualquer um, o Bar da Vila com certeza é a melhor escolha para você!"
                }
                isDisabled={true}
                onChangeText={(e) => setNome(e)}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="text-snippet" />}
                    size={5}
                    ml={2}
                    color="muted.400"
                  />
                }
              />
            </FormControl>
          </VStack>
        </Box>
      </VStack>
      <Box w="100%" mb={5}>
        <Button
        onPress={() => navigationProp.navigate("Upgrade")}
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
    </>
  );
}

export default PerfilEstabelecimento;
