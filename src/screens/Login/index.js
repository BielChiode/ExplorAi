import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Icon,
  Input,
  Link,
  Image,
  Text,
  VStack,
  HStack,
  KeyboardAvoidingView,
} from "native-base";
import React, { useEffect } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Login({ navigation }) {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState(null);
  const [senha, setSenha] = React.useState(null);
  const [usuario, setUsuario] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  let imageLogin;

  function handleLogin() {
    if (!email || !senha) {
      return Alert.alert("Login", "Por favor preencha todos os campos...");
    }
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, senha)
      .then((result) => {
        console.log(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        setIsLoading(false);
      });
  }

  // useEffect(() => {
  //   usuario
  //     ? (imageLogin = require("../../../assets/login.png"))
  //     : (imageLogin = require("../../../assets/login-estabelecimento.png"));
  // }, [usuario, imageLogin]);

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView>
        <Center w="100%" h="100%" bg="coolGray.50">
          <Box safeArea p={2} py={8} w="90%" maxW="290">
            <Box w="100%" h="40%">
              {usuario ? (
                <Image
                  w="full"
                  h="80%"
                  resizeMode="contain"
                  source={require("../../../assets/login.png")}
                  alt="Imagem de login"
                />
              ) : (
                <Image
                  w="full"
                  h="80%"
                  resizeMode="contain"
                  source={require("../../../assets/login-estabelecimento.png")}
                  alt="Imagem de login"
                />
              )}
              <Heading size="lg" fontWeight="600" color="coolGray.800">
                Bem vindo!
              </Heading>
              <Heading
                mt={1}
                color="coolGray.600"
                fontWeight="medium"
                size="xs"
              >
                Faça o login para continuar...
              </Heading>
            </Box>

            <Box w="100%" h="60%">
              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input
                    placeholder="seu@email.com"
                    type="email"
                    value={email}
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
                    value={senha}
                    onChangeText={(e) => setSenha(e)}
                    onPress={() => setShow(!show)}
                    placeholder="Password"
                  />
                  <Link
                    _text={{
                      fontSize: "xs",
                      fontWeight: "500",
                      color: "secondaryLocal",
                    }}
                    onPress={() => navigation.navigate("Home")}
                    alignSelf="flex-end"
                    mt="1"
                  >
                    Esqueceu a senha?
                  </Link>
                </FormControl>
                <Button
                  onPress={handleLogin}
                  mt="2"
                  bg="red.500"
                  _text={{ color: "coolGray.50" }}
                  isLoading={isLoading}
                >
                  Entrar
                </Button>
                <HStack mt="6" justifyContent="center">
                  <Text fontSize="sm" color="coolGray.600">
                    Sou novo por aqui...
                  </Text>
                  <Link
                    _text={{
                      color: "secondaryLocal",
                      fontWeight: "medium",
                      fontSize: "sm",
                    }}
                    onPress={() => navigation.navigate("Cadastro")}
                  >
                    Cadastre-se
                  </Link>
                </HStack>
                <HStack mt="6" justifyContent="center">
                  <Link
                    _text={{
                      color: "secondaryLocal",
                      fontWeight: "medium",
                      fontSize: "sm",
                    }}
                    onPress={() => setUsuario(!usuario)}
                  >
                    {usuario
                      ? "Entrar como estabelecimento"
                      : "Entrar como usuário"}
                  </Link>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </Center>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}
