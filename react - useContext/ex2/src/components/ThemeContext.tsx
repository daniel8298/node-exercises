import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";

type ContextValue = {
  name: "dark" | "light" | undefined;
  setName: Dispatch<SetStateAction<"dark" | "light" | undefined>>;
};

const ThemeContext = createContext<null | ContextValue>(null);
const { Provider } = ThemeContext;

type themeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider: FC<themeContextProviderProps> = ({
  children,
}) => {
  const [name, setName] = useState<"dark" | "light" | undefined>("light");

  return <Provider value={{ name, setName }}>{children}</Provider>;
};

export const useName = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useName must be used within a NameProvider");
  return context;
};

export default ThemeContextProvider;
