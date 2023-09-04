import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
  useEffect,
} from "react";

type UserData = Record<string, unknown> | null;

type UserContextProviderProps = {
  children: ReactNode;
};

type UserContextValue = {
  user: UserData;
  setUser: Dispatch<SetStateAction<UserData>>;
};
const UserContext = createContext<null | UserContextValue>(null);
const { Provider } = UserContext;

export const UserContextProvider: FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserData>(null);
  const random = Math.round(Math.random() * 9 + 1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((usersFromDb) => setUser(usersFromDb[random]))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

export const useName = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useName must be used within a NameProvider");
  return context;
};

export default UserContextProvider;
