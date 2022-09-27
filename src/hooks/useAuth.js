import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const usuario = {
    active: true,
    name: "Gabriel Chiode",
    tipo: "usuario",
    imagem:
      "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  };
  const estabelecimento = {
    active: true,
    name: "Boteco dus Carioca",
    tipo: "estabelecimento",
    imagem:
      "https://i.pinimg.com/originals/f2/e2/23/f2e223539c0b7d30fb5a453a602eafaa.png",
  };
  const [user, setUser] = useState(usuario);

  const changeUser = () => {
    if (user.tipo === "usuario") setUser(estabelecimento);
    else setUser(usuario);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        changeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
