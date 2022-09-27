import React from "react";
import useAuth from "../../hooks/useAuth";
import PerfilEstabelecimento from "./PerfilEstabelecimento";
import PerfilUsuario from "./PerfilUsuario";

// import { Container } from './styles';

function Perfil({ navigation }) {
  const { user } = useAuth();
  console.log(user);
  if (user.tipo === "usuario") {
    return <PerfilUsuario navigationProp={navigation} />;
  }
  if (user.tipo === "estabelecimento") {
    return <PerfilEstabelecimento navigationProp={navigation} />;
  }
}

export default Perfil;
