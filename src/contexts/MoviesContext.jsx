import React, { createContext, useContext } from "react";

const context = createContext();
export async function useContexts() {
  return useContext(context);
}

const Context = ({ children }) => {
  const value = {};
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default Context;
