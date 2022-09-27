import React from "react";
import useAuth from "../../hooks/useAuth";
import HomeUsuario from "./HomeUsuario";

// import { Container } from './styles';

function Home({ navigation }) {
  const { user } = useAuth();
  return <HomeUsuario navigations={navigation} />;
}

export default Home;
