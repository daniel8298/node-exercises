import React, { createContext, useState, FC } from "react";

interface UserContextType {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const Context = createContext<UserContextType | null>(null);

const ContextProvider: FC<UserContextProviderProps> = (props) => {
  const [text, setText] = useState<string>("hello world");
  return (
    <Context.Provider value={{ text, setText }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
