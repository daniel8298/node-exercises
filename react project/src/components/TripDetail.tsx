import { TripData, UsePage } from "./PageContext";
import { useState, useEffect } from "react";

const TripDetail = () => {
  const PageContext = UsePage();
  const { id, setPage, setSelectTrip } = PageContext;
  const [tripsData, setTrips] = useState<TripData | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/trips/${id}`)
      .then((data) => data.json())
      .then((tripFromDb) => setTrips(tripFromDb))
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="divTripDetail">
      <div className="divButtonTripDetail">
        <button
          className="TripDetailButton"
          onClick={() => {
            setPage("Trips");
          }}
        >
          TripsPage
        </button>
        <button
          className="TripDetailButton"
          onClick={() => {
            setPage("UpdateTripForm");
            setSelectTrip(tripsData);
          }}
        >
          UpdateTrip
        </button>
      </div>

      <div className="TripDetail">
        <img src={tripsData?.image as string} width={"500px"} />
        <span>
          <span className="TitleTripDetail">Name:</span>{" "}
          {tripsData?.name as string}
        </span>
        <span>
          <span className="TitleTripDetail">Destination:</span>{" "}
          {tripsData?.destination as string}
        </span>
        <span>
          <span className="TitleTripDetail">StartDate:</span>{" "}
          {tripsData?.startDate as string}
        </span>
        <span>
          <span className="TitleTripDetail">EndDate:</span>{" "}
          {tripsData?.endDate as string}
        </span>
        <span>
          <span className="TitleTripDetail">Description:</span>{" "}
          {tripsData?.description as string}
        </span>
        <span>
          <span className="TitleTripDetail">Price:</span>{" "}
          {tripsData?.price as number}
        </span>
        <div>
          <span className="TitleTripDetail">Activities:</span>
          {tripsData && (tripsData.activities as string[])?.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
