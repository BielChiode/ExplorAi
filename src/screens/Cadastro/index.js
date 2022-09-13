import React from "react";
import { Box, Heading } from "native-base";
import EstabUsuario from "../../components/EstabUsuario";
import CadastroUsuario from "./CadastroUsuario";
import CadastroEstabelecimento from "./CadastroEstabelecimento";

function Cadastro() {
  const [tipoCadastro, setTipoCadastro] = React.useState(null);
  const goToMenu = (tipo) => {
    setTipoCadastro(tipo);
  };

  if (tipoCadastro == null)
    return <EscolheUsuarioEstabelecimento goToMenu={goToMenu} />;

  if (tipoCadastro === "usuario") {
    return <CadastroUsuario />; //componente de cadastro para usuario
  } else {
    return <CadastroEstabelecimento />; //componente de cadastro para estabelecimento
  }
}

function EscolheUsuarioEstabelecimento({ goToMenu }) {
  return (
    <Box flex={1} w="100%">
      <Box w="100%" justifyContent="center" alignItems="center" pt="10">
        <Heading size="md" fontWeight="700" color="coolGray.800">
          Você deseja fazer seu cadastro como:
        </Heading>
      </Box>
      <EstabUsuario goToMenu={goToMenu} />
    </Box>
  );
}

export default Cadastro;
