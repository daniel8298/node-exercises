import { useContext } from "react";
import { Context } from "./TextContext";

const Child = () => {
  const context = useContext(Context);
  if (!context) throw new Error("this is null");
  const { text } = context;
  return <>{text}</>;
};

export default Child;
