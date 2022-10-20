import React from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  Pressable,
  Text,
  TextArea,
  VStack,
} from "native-base";
import useAuth from "../../hooks/useAuth";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function PerfilEstabelecimento() {
  const navigation = useNavigation();

  const [show, setShow] = React.useState(false);
  const { user, logout } = useAuth();
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
          <Box w="100%" mt={2} alignItems="center" flexDirection="column">
            <Avatar bg="amber.500" size="md" source={{ uri: user.imagem }}>
              Usuário
            </Avatar>
            <Pressable
              onPress={() => {
                logout();
                return navigation.navigate("Home");
              }}
            >
              <Box
                w="30px"
                h="30px"
                bgColor="muted.300"
                rounded="full"
                alignItems="center"
                justifyContent="center"
                mt={2}
              >
                <MaterialIcons name="logout" size={14} color="#525252" />
              </Box>
            </Pressable>
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
        <Box w="100%" mb={5} position="absolute" bottom={0}>
          <Button
            onPress={() => navigation.navigate("Upgrade")}
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
      </VStack>
    </>
  );
}

export default PerfilEstabelecimento;
