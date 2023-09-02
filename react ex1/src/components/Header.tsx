// import { CSSProperties } from "react";

import Title from "./Title";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Title text={title} />
      <button>click me!</button>
    </header>
  );
};

export default Header;
