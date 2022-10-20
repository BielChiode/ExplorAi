import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = React.useState({
    active: true,
    name: "Gabriel Chiode",
    tipo: "usuario",
    imagem:
      "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    preferencias: [],
  });
  const estabelecimento = {
    active: true,
    name: "Boteco da Vila",
    tipo: "estabelecimento",
    imagem:
      "https://i.pinimg.com/originals/f2/e2/23/f2e223539c0b7d30fb5a453a602eafaa.png",
  };
  const [user, setUser] = useState({ active: false, tipo: "usuario" });

  const loginUsuario = () => {
    if (user.preferencias) {
      setUsuario({ preferencias: user.preferencias });
    }
    setUser(usuario);
    return;
  };
  const loginEstabelecimento = () => {
    setUser(estabelecimento);
    return;
  };

  const logout = () => {
    setUser({ active: false, tipo: "usuario", preferencias: [] });
    return;
  };

  const setPreferenciasUsuario = (preferencias) => {
    if (user.active) setUsuario({ ...usuario, preferencias: preferencias });
    setUser({ ...user, preferencias: preferencias });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setPreferenciasUsuario,
        loginEstabelecimento,
        loginUsuario,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
