import { createContext, useState } from "react";
import { getItemSession } from "./../apis/Session";
import PropTypes from "prop-types";

export const SessionContext = createContext({
  token: "Mauro",
  updSession: () => {},
});

export const SessionProvider = ({ children }) => {
  const [token, setToken] = useState(getItemSession("token"));
  const updSession = (tkn) => {
    setToken(tkn);
  };
  return (
    <SessionContext.Provider value={{ token, updSession }}>
      {children}
    </SessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
