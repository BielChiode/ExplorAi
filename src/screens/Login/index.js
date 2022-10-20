import React from "react";
import LoginUsuario from "./LoginUsuario";
import LoginEstabelecimento from "./LoginEstabelecimento";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = React.useState(true);

  if (usuario)
    return <LoginUsuario navigationC={navigation} setUsuario={setUsuario} />;
  else
    return (
      <LoginEstabelecimento navigationC={navigation} setUsuario={setUsuario} />
    );
}
