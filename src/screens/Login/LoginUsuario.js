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
import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import useAuth from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
export default function LoginUsuario({ setUsuario }) {
  const navigation = useNavigation();

  const [show, setShow] = React.useState(false);
  const [form, setForm] = React.useState({
    email: "",
    senha: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const { loginUsuario } = useAuth();

  function handleLogin() {
    loginUsuario();
    // if (!email || !senha) {
    //   return Alert.alert("Login", "Por favor preencha todos os campos...");
    // }
    // setIsLoading(true);
    // auth()
    //   .signInWithEmailAndPassword(email, senha)
    //   .then((result) => {
    //     console.log(result);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error.code);
    //     setIsLoading(false);
    //   });
  }
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView>
        <Center w="100%" h="100%" bg="coolGray.50">
          <Box w="90%" maxW="290">
            <Box w="100%" h="40%">
              <Image
                w="full"
                h="80%"
                resizeMode="contain"
                source={require("../../../assets/login.png")}
                alt="Imagem de login"
              />
              <Box w="100%" alignItems="center" justifyContent="center" mb={2}>
                <Heading size="md" fontWeight="600" color="coolGray.800">
                  Login Usuário
                </Heading>
              </Box>
              <Heading size="sm" fontWeight="600" color="coolGray.800">
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
                    value={form.email}
                    onChangeText={(e) => setForm({ ...form, email: e })}
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
                    value={form.senha}
                    onChangeText={(e) => setForm({ ...form, senha: e })}
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
                {isLoading ? (
                  <Box></Box>
                ) : (
                  <Button
                    onPress={() => {
                      loginUsuario();
                      navigation.navigate("Home");
                    }}
                    mt="2"
                    bg="red.500"
                    _text={{ color: "coolGray.50" }}
                    isLoading={isLoading}
                  >
                    Entrar
                  </Button>
                )}
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
                    onPress={() => setUsuario(false)}
                  >
                    Entrar como estabelecimento
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
