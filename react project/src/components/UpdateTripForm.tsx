import { getToken } from "../services/localStorageService";
import { UsePage } from "./PageContext";
import { useState } from "react";

const UpdateTripForm = () => {
  const context = UsePage();
  const { id, setPage, selectTrip } = context;

  const [tripsData, setTrips] = useState<Record<string, unknown>>({
    ...selectTrip,
  });

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrips((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdateTrip = (tripId: string) => {
    fetch(`http://localhost:3000/api/trips/${tripId}`, {
      headers: {
        authorization: getToken(),
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(tripsData),
    })
      .then((response) => response.json())
      .then((usersFromDb) => setTrips(usersFromDb))
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="divUpdateTrip  divNewTrip">
      <div className="divUpdateTripButton">
        <button
          className="updateTripButton newTripButton"
          onClick={() => {
            setPage("Trips");
          }}
        >
          TripsPage
        </button>
      </div>

      <div className="divUpdateTripForm ">
        <form className="updateTripForm ">
          <label>Img:</label>
          <input
            className="inputNewTrip"
            type="text"
            onChange={(e) => changeValue(e)}
            name="image"
            value={tripsData?.image as string}
          />
          <label>Name:</label>
          <input
            className="inputNewTrip"
            type="text"
            onChange={(e) => changeValue(e)}
            name="name"
            value={tripsData?.name as string}
          />
          <label>Destination:</label>
          <input
            className="inputNewTrip"
            type="text"
            onChange={(e) => changeValue(e)}
            name="destination"
            value={tripsData?.destination as string}
          />
          <label>StartDate:</label>
          <input
            className="inputNewTrip"
            type="text"
            onChange={(e) => changeValue(e)}
            name="startDate"
            value={tripsData?.startDate as string}
          />
          <label>EndDate:</label>
          <input
            className="inputNewTrip"
            type="text"
            onChange={(e) => changeValue(e)}
            name="endDate"
            value={tripsData?.endDate as string}
          />
          <label>Description:</label>
          <input
            className="inputNewTrip"
            type="text"
            onChange={(e) => changeValue(e)}
            name="description"
            value={tripsData?.description as string}
          />
          <label>Price:</label>
          <input
            className="inputNewTrip"
            type="text"
            onChange={(e) => changeValue(e)}
            name="price"
            value={tripsData?.price as string}
          />
          <label>Activities:</label>
          <input
            className="inputNewTrip"
            type="text"
            onChange={(e) => {
              const values = e.target.value.split(",");
              setTrips((prev) => {
                return { ...prev, [e.target.name]: values };
              });
            }}
            name="activities"
            value={tripsData?.activities as string}
          />

          <button
            className="buttonNewTrip"
            onClick={() => handleUpdateTrip(id)}
          >
            Update Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTripForm;
