import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  Heading,
  Icon,
  Image,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import LoginImage from "../../../assets/login-estabelecimento.png";
import { Alert } from "react-native";

function CadastroEstabelecimento() {
  const [show, setShow] = React.useState(false);
  const [invalidInput, setInvalidInput] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    nomeEstabelecimento: "",
    endereco: "",
    descricao: "",
    hrFuncionamento: "",
    telefone: "",
    site: "",
    site: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  function handleCadastro() {
    if (!form.email || !form.senha || !form.confirmaSenha) {
      return Alert.alert("Cadastro", "Por favor preencha todos os campos...");
    }
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(form.email, form.senha)
      .then((result) => {
        console.log(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        setIsLoading(false);
        return;
      });
  }
  return (
    <ScrollView bg="coolGray.50">
      <KeyboardAvoidingView>
        <Center w="100%">
          <Box p={2} w="90%" maxW="290">
            <Box w="100%">
              <Image
                w="full"
                h="200px"
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
                Faça o cadastro do seu estabelecimento, assim podemos
                aperfeiçoar a busca do usuário pelo seu comércio
              </Heading>
            </Box>
            <Divider my={3} />
            <Heading size="md" fontWeight="600" color="coolGray.800">
              Informações
            </Heading>
            <Box w="100%" h="60%">
              <VStack space={3} mt="5">
                <CampoForm
                  titulo="Nome"
                  placeholder="Bar central da vila"
                  value={form.nomeEstabelecimento}
                  type="text"
                  onChangeText={(e) => setForm({ nomeEstabelecimento: e })}
                />
                <CampoForm
                  titulo="Endereço"
                  placeholder="Rua da vila, 123"
                  type="text"
                  value={form.endereco}
                  onChangeText={(e) => setForm({ endereco: e })}
                />
                <FormControl>
                  <FormControl.Label>
                    Descrição estabelecimento
                  </FormControl.Label>
                  <Input
                    h="100px"
                    lineHeight={5}
                    placeholder="Bar aconchegante com ambiente aberto e música ao vivo, perfeito para reunir a familia e amigos."
                    type="text"
                    value={form.descricao}
                    onChangeText={(e) => setForm({ descricao: e })}
                  />
                </FormControl>
                <CampoForm
                  titulo="Horário de funcionamento"
                  placeholder="Seg a Dom, 8:00 as 22:00"
                  type="text"
                  value={form.hrFuncionamento}
                  onChangeText={(e) => setForm({ hrFuncionamento: e })}
                />
                <Divider my={3} />
                <Heading size="md" fontWeight="600" color="coolGray.800">
                  Contato
                </Heading>
                <CampoForm
                  titulo="Telefone"
                  placeholder="(11)99999-9999"
                  value={form.telefone}
                  type="text"
                  onChangeText={(e) => setForm({ telefone: e })}
                />
                <CampoForm
                  titulo="Site"
                  placeholder="www.bardavila.com.br"
                  value={form.site}
                  type="text"
                  onChangeText={(e) => setForm({ site: e })}
                />
                <CampoForm
                  titulo="Instagram"
                  placeholder="@bardavila"
                  value={form.instagram}
                  type="text"
                  onChangeText={(e) => setForm({ instagram: e })}
                />
                <Divider my={3} />
                <Heading size="md" fontWeight="600" color="coolGray.800">
                  Autenticação
                </Heading>
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
                  onPress={handleCadastro}
                  bg="red.500"
                  _text={{ color: "coolGray.50" }}
                  mt={5}
                  mb={10}
                >
                  Cadastrar
                </Button>
              </VStack>
            </Box>
          </Box>
        </Center>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default CadastroEstabelecimento;

function CampoForm({ titulo, placeholder, type, value, onChangeText }) {
  return (
    <FormControl>
      <FormControl.Label>{titulo}</FormControl.Label>
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChangeText={onChangeText}
      />
    </FormControl>
  );
}
