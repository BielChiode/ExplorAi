import React, { createContext, useContext, useEffect } from "react";

const AuthContext = createContext({});

const config = {
  iosClientId:
    "427286578614-4qh8lji8f6bl5lagidmn3dd347f2pjpf.apps.googleusercontent.com",
  androidClientId:
    "427286578614-mgjl0n8tseqrfhpei5no0os2svdm24s6.apps.googleusercontent.com",
  expoClientId:
    "427286578614-s809ebqsvqm11jiec4h2b8ekqfbv15i9.apps.googleusercontent.com",
};

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: {
          active: true,
          name: "Gabriel",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
