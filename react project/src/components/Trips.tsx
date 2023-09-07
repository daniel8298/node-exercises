import { getToken } from "../services/localStorageService";
import { UsePage } from "./PageContext";
import { useState, useEffect } from "react";

const Trips = () => {
  const [tripsData, setTrips] = useState<Record<string, unknown>[] | null>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/trips")
      .then((data) => data.json())
      .then((tripsFromDb) => setTrips(tripsFromDb))
      .catch((err) => {
        console.error(err);
      });
  }, [tripsData]);

  const context = UsePage();
  const { setPage, setId } = context;

  const handleDelete = (TripId: string) => {
    fetch(`http://localhost:3000/api/trips/${TripId}`, {
      headers: {
        authorization: getToken(),
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((tripFromDb) => console.log(tripFromDb))
      .catch((err) => {
        console.error(err);
      });
  };

  const ShowMorePageAndDetails = (TripId: string) => {
    setPage("TripDetail");
    setId(TripId);
  };
  return (
    <div className="divTrips">
      <div className="divButtonsTrips">
        <button
          className="TripsButton"
          onClick={() => {
            setPage("Home");
          }}
        >
          HomePage
        </button>
        <button
          className="TripsButton"
          onClick={() => {
            setPage("NewTripForm");
          }}
        >
          NewTripPage
        </button>
      </div>

      <div className="allTrips">
        {tripsData &&
          tripsData.map((trip) => (
            <div key={trip.id as string}>
              <div
                className="tripCard"
                onClick={() => ShowMorePageAndDetails(trip.id as string)}
              >
                <h3>{trip.name as string}</h3>
                <img className="imgTrip" src={trip.image as string} />

                <button
                  className="TripsButtonDelete"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (confirm("are you sure do you want delete this trip?"))
                      handleDelete(trip.id as string);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trips;
