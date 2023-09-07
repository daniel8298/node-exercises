import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";

export type TripData = {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
};

type ContextValue = {
  page: string;
  id: string;
  selectTrip: TripData | null;
  setPage: Dispatch<SetStateAction<string>>;
  setId: Dispatch<SetStateAction<string>>;
  setSelectTrip: Dispatch<SetStateAction<TripData | null>>;
};

const PageContext = createContext<null | ContextValue>(null);
const { Provider } = PageContext;

type pageProviderProps = {
  children: ReactNode;
};

export const PageProvider: FC<pageProviderProps> = ({ children }) => {
  const [page, setPage] = useState("Home");
  const [id, setId] = useState("");
  const [selectTrip, setSelectTrip] = useState<TripData | null>(null);

  return (
    <Provider value={{ page, id, selectTrip, setPage, setId, setSelectTrip }}>
      {children}
    </Provider>
  );
};

export const UsePage = () => {
  const context = useContext(PageContext);
  if (!context) throw new Error("usePage must be used within a pageProvider");
  return context;
};

export default PageProvider;
