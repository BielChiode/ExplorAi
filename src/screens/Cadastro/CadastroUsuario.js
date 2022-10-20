import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Icon,
  Image,
  Input,
  KeyboardAvoidingView,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import LoginImage from "../../../assets/login.png";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import useAuth from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function CadastroUsuario() {
  const [show, setShow] = React.useState(false);
  const [invalidInput, setInvalidInput] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    email: "",
    senha: "",
    confirmaSenha: "",
  });
  const navigation = useNavigation();
  const { loginUsuario } = useAuth();
  // function handleCadastro() {
  //   if (!form.email || !form.senha || !form.confirmaSenha) {
  //     return Alert.alert("Cadastro", "Por favor preencha todos os campos...");
  //   }
  //   setIsLoading(true);
  //   auth()
  //     .createUserWithEmailAndPassword(form.email, form.senha)
  //     .then((result) => {
  //       console.log(result);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error.code);
  //       setIsLoading(false);
  //       return;
  //     });
  // }
  return (
    // <ScrollView flex={1}>
    <DismissKeyboard>
      <KeyboardAvoidingView>
        <Center w="100%" h="100%" bg="coolGray.50">
          <Box safeArea p={2} py={5} w="90%" maxW="290">
            <Box w="100%" h="40%">
              <Image
                w="full"
                h="80%"
                resizeMode="contain"
                source={LoginImage}
                alt="Imagem de login"
              />
              <Heading size="lg" fontWeight="600" color="coolGray.800">
                Cadastro
              </Heading>
              <Heading
                mt={1}
                color="coolGray.600"
                fontWeight="medium"
                size="xs"
              >
                Faça seu cadastro para melhorar sua experiência no app
              </Heading>
            </Box>
            <Box w="100%" h="60%" mt={2}>
              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input
                    placeholder="seu@email.com"
                    type="email"
                    value={form.email}
                    onChangeText={(e) => setForm({ email: e })}
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
                    onChangeText={(e) => setForm({ senha: e })}
                    onPress={() => setShow(!show)}
                    placeholder="Password"
                  />
                </FormControl>
                <FormControl isInvalid={invalidInput}>
                  <FormControl.Label>Confirme sua senha</FormControl.Label>
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
                    value={form.confirmaSenha}
                    onChangeText={(e) => {
                      setForm({ confirmaSenha: e });
                      form.senha !== e
                        ? setInvalidInput(true)
                        : setInvalidInput(false);
                    }}
                    onPress={() => setShow(!show)}
                    placeholder="Password"
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    As senhas não conferem.
                  </FormControl.ErrorMessage>
                </FormControl>
                <Button
                  isLoading={isLoading}
                  onPress={() => {
                    loginUsuario();
                    navigation.navigate("Home");
                  }}
                  mt="2"
                  bg="red.500"
                  _text={{ color: "coolGray.50" }}
                >
                  Cadastrar
                </Button>
              </VStack>
            </Box>
          </Box>
        </Center>
      </KeyboardAvoidingView>
    </DismissKeyboard>
    // </ScrollView>
  );
}

export default CadastroUsuario;
