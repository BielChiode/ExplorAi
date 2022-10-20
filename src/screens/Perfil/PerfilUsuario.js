import React from "react";
import {
  Avatar,
  Box,
  FormControl,
  HStack,
  Icon,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import useAuth from "../../hooks/useAuth";
import PreferenciaItem from "../../components/PreferenciaItem";
import { useNavigation } from "@react-navigation/native";

function PerfilUsuario() {
  const navigation = useNavigation();

  const [show, setShow] = React.useState(false);
  const { user, logout } = useAuth();
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
        <Box
          w="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
        >
          <Avatar
            bg="amber.500"
            size="md"
            source={{
              uri: user.imagem,
            }}
          >
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
              ml={2}
            >
              <MaterialIcons name="logout" size={14} color="#525252" />
            </Box>
          </Pressable>
        </Box>
      </HStack>
      <Text fontSize="lg" fontWeight="bold" mt={5}>
        Minhas preferências
      </Text>
      <HStack mt={5} space="3%" flexWrap="wrap">
        {user.preferencias.map((preferencia, index) => {
          return (
            <PreferenciaItem
              key={index}
              titulo={preferencia}
              checkedProp={true}
              width="30%"
              height="30px"
              fontSizeTitulo="12px"
            />
          );
        })}
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

export default PerfilUsuario;
