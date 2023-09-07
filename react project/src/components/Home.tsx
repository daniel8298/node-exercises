import { UsePage } from "./PageContext";

const Home = () => {
  const context = UsePage();
  const { setPage } = context;
  return (
    <header className="divButtonsHome">
      <h1>Your Trip Starts Here</h1>
      <div>
        <button
          className="homeButtons"
          onClick={() => {
            setPage("UserRegistration");
          }}
        >
          Register
        </button>
        <button
          className="homeButtons"
          onClick={() => {
            setPage("UserLogin");
          }}
        >
          Login
        </button>
      </div>
      <button
        id="homeButtonTrip"
        onClick={() => {
          setPage("Trips");
        }}
      >
        Trips
      </button>
    </header>
  );
};

export default Home;
