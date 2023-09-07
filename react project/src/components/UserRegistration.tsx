import { UsePage } from "./PageContext";
import { useState } from "react";

const UserRegistration = () => {
  const context = UsePage();
  const { setPage } = context;
  const [userRegistration, setUserRegistration] = useState<
    Record<string, unknown>
  >({});

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegistration((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleRegistration = () => {
    fetch("http://localhost:3000/api/auth/register", {
      headers: {
        authorization: "test-token",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userRegistration),
    })
      .then((response) => response.json())
      .then((usersFromDb) => {
        console.log(usersFromDb);
        setUserRegistration(usersFromDb);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="div_Login_Registration">
      <div className="divRegistrationButton">
        <button
          className="loginRegistration_ButtonHome"
          onClick={() => {
            setPage("Home");
          }}
        >
          HomePage
        </button>
      </div>

      <div className="divUserRegistration">
        <form
          className="UserRegistrationForm"
          onSubmit={(e) => e.preventDefault()}
        >
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

          <button
            className="button_Login_Registration"
            onClick={() => handleRegistration()}
          >
            Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
