import { useContext, useState } from "react";
import Child from "./Child";
import { Context } from "./TextContext";

const Father = () => {
  const context = useContext(Context);
  if (!context) throw new Error("this is null");
  const { setText } = context;
  const [inText, setTextState] = useState("");
  return (
    <div>
      <Child />
      <input
        type="text"
        onChange={(e) => {
          setTextState(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setText(inText);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Father;
