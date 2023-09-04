import Theme from "./Theme";
import { useName } from "./ThemeContext";
const ThemeSwitcher = () => {
  const context = useName();
  const { name, setName } = context;

  return (
    <>
      <button
        onClick={() => {
          if (name === "light") {
            setName("dark");
          } else setName("light");
        }}
      >
        Change Color
      </button>
      <div id={name}>
        <Theme />
      </div>
    </>
  );
};

export default ThemeSwitcher;
