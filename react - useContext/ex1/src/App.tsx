import "./App.css";
import ContextProvider from "./components/TextContext";

import Grandpa from "./components/Grandpa";

function App() {
  return (
    <ContextProvider>
      <Grandpa />
    </ContextProvider>
  );
}

export default App;
