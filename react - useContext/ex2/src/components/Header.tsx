import ThemeSwitcher from "./ThemeSwitcher";
import { useName } from "./UserContext";

const Header = () => {
  const context = useName();
  const { user } = context;

  return (
    <header>
      <ThemeSwitcher />
      <p>{user && (user.username as unknown as string)}</p>
    </header>
  );
};

export default Header;
