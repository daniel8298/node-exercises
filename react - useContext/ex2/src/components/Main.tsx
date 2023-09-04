import { useName } from "./UserContext";
import { useState } from "react";

const Main = () => {
  const context = useName();
  const { user } = context;
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);

  const toggleDetailsHandler = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <div>
      {user && (user.name as unknown as string)}
      <br />
      <button onClick={toggleDetailsHandler}>More Details</button>
      {isDetailsVisible && (
        <div>
          <p>Email: {user && (user.email as unknown as string)}</p>
          <p>Tel:{user && (user.phone as unknown as string)}</p>
          <p>City: {user && (user.address.city as unknown as string)}</p>
        </div>
      )}
    </div>
  );
};

export default Main;
