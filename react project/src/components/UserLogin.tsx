import { setToken } from "../services/localStorageService";
import { UsePage } from "./PageContext";
import { useState } from "react";

const UserLogin = () => {
  const context = UsePage();
  const { setPage } = context;
  const [userLogin, setUserLogin] = useState<Record<string, unknown>>();

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = () => {
    fetch("http://localhost:3000/api/auth/login/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userLogin),
    })
      .then((response) => response.json())
      .then((usersFromDb) => {
        setToken(usersFromDb.responseObj.token);
        console.log(usersFromDb);
        setUserLogin(usersFromDb);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="div_Login_Registration">
      <div className="divLoginButton">
        <button
          className="loginRegistration_ButtonHome"
          onClick={() => {
            setPage("Home");
          }}
        >
          HomePage
        </button>
      </div>

      <div className="divUserLogin">
        <form className="userLoginForm" onSubmit={(e) => e.preventDefault()}>
          <label>Email: </label>
          <input
            required
            className="inputLoginRegistration"
            type="text"
            placeholder="Enter Email..."
            onChange={(e) => changeValue(e)}
            name="email"
          />
          <label>Password: </label>
          <input
            required
            className="inputLoginRegistration"
            type="text"
            placeholder="Enter Password..."
            onChange={(e) => changeValue(e)}
            name="password"
          />
          <button className="button_Login_Registration" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
