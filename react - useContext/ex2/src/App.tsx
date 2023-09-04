import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ThemeContextProvider from "./components/ThemeContext";

import UserContextProvider from "./components/UserContext";
Main;

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Header />
        <Main />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
