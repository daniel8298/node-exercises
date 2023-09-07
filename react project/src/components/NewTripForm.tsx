import { getToken } from "../services/localStorageService";
import { UsePage } from "./PageContext";
import { useState } from "react";

const NewTripForm = () => {
  const context = UsePage();
  const { setPage } = context;
  const [tripsData, setTrips] = useState<Record<string, unknown>>({});

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrips((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCreateTrip = () => {
    fetch("http://localhost:3000/api/trips", {
      headers: {
        authorization: getToken(),
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tripsData),
    })
      .then((response) => response.json())
      .then((tripFromDb) => setTrips(tripFromDb))
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="divNewTrip">
      <div className="divNewTripButton">
        <button
          className="newTripButton"
          onClick={() => {
            setPage("Trips");
          }}
        >
          TripsPage
        </button>
      </div>

      <div className="divNewTripForm">
        <form className="newTripForm">
          <label>Img:</label>
          <input
            className="inputNewTrip"
            type="text"
            placeholder="Enter image address..."
            onChange={(e) => changeValue(e)}
            name="image"
          />
          <label>Name:</label>
          <input
            className="inputNewTrip"
            type="text"
            placeholder="Enter Name..."
            onChange={(e) => changeValue(e)}
            name="name"
          />
          <label>Destination:</label>
          <input
            className="inputNewTrip"
            type="text"
            placeholder="Enter Destination..."
            onChange={(e) => changeValue(e)}
            name="destination"
          />
          <label>StartDate:</label>
          <input
            className="inputNewTrip"
            type="text"
            placeholder="Enter StartDate..."
            onChange={(e) => changeValue(e)}
            name="startDate"
          />
          <label>EndDate:</label>
          <input
            className="inputNewTrip"
            type="text"
            placeholder="Enter EndDate..."
            onChange={(e) => changeValue(e)}
            name="endDate"
          />
          <label>Description:</label>
          <input
            className="inputNewTrip"
            type="text"
            placeholder="Enter Description..."
            onChange={(e) => changeValue(e)}
            name="description"
          />
          <label>Price:</label>
          <input
            className="inputNewTrip"
            type="text"
            placeholder="Enter Price..."
            onChange={(e) => changeValue(e)}
            name="price"
          />
          <label>Activities:</label>
          <input
            className="inputNewTrip"
            type="text"
            placeholder="Enter Activities..."
            onChange={(e) => {
              const values = e.target.value.split(",");
              setTrips((prev) => {
                return { ...prev, [e.target.name]: values };
              });
            }}
            name="activities"
          />

          <button className="buttonNewTrip" onClick={handleCreateTrip}>
            Create New Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTripForm;
