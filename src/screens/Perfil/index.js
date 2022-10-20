import React from "react";
import useAuth from "../../hooks/useAuth";
import PerfilEstabelecimento from "./PerfilEstabelecimento";
import PerfilUsuario from "./PerfilUsuario";

function Perfil({ navigation }) {
  const { user } = useAuth();
  if (!user.active) return <>{navigation.navigate("Home")}</>;
  if (user.tipo === "usuario") {
    return <PerfilUsuario />;
  }
  if (user.tipo === "estabelecimento") {
    return <PerfilEstabelecimento />;
  }
}

export default Perfil;
