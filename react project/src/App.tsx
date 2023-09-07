import "./App.css";
import Home from "./components/Home";
import UpdateTripForm from "./components/UpdateTripForm";
import Trips from "./components/Trips";
import { UsePage } from "./components/PageContext";
import NewTripForm from "./components/NewTripForm";
import UserLogin from "./components/UserLogin";
import UserRegistration from "./components/UserRegistration";
import TripDetail from "./components/TripDetail";

function App() {
  const context = UsePage();
  const { page } = context;
  if (page === "Home") return <Home />;
  if (page === "Trips") return <Trips />;
  if (page === "TripDetail") return <TripDetail />;
  if (page === "NewTripForm") return <NewTripForm />;
  if (page === "UserLogin") return <UserLogin />;
  if (page === "UserRegistration") return <UserRegistration />;
  if (page === "UpdateTripForm") return <UpdateTripForm />;
  return (
    <div>
      <h1>Error 404</h1>
      <h2>Page not found</h2>
    </div>
  );
}

export default App;
