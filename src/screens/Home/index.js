import { Box } from "native-base";
import React from "react";
import useAuth from "../../hooks/useAuth";
import HomeEstabelecimento from "./HomeEstabelecimento";
import HomeUsuario from "./HomeUsuario";

function Home({ navigation }) {
  const { user } = useAuth();
  console.log(user);

  if (!user.active) return <HomeUsuario navigations={navigation} />;
  if (user.tipo === "usuario") {
    return <HomeUsuario navigations={navigation} />;
  }
  if (user.tipo === "estabelecimento") {
    return <HomeEstabelecimento />;
  }
}

export default Home;
