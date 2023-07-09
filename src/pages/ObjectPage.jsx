import { useParams } from "react-router";
import "./Homepage.css";
import { useEffect, useState } from "react";
import { useItems } from "../context/ItemContext";
import Header from "../components/Header";

export default function ObjectPage() {
  const { contid, conId, objId } = useParams();
  const { continentData } = useItems();
  const [objectData, setObjectData] = useState({});

  useEffect(() => {
    setObjectData(
      continentData
        ?.find((continent) => +continent?.id === +contid)
        .countries.find((country) => +country.id === +conId)
        .destinations.find((obj) => +obj?.id === +objId)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contid, conId, objId]);

  return (
    <div>
      <Header/>
      <div className="Continent-sec-1">
        <h1>{objectData?.name?.toUpperCase()}</h1>
      </div>
      <div className="Obj-sec-2">
        <div>
          <img src={objectData?.image} alt="..." className="obj-img"/>
        </div>
        <div style={{maxWidth: "700px"}}> 
            <p className="obj-desc"><b>Description:</b> {objectData?.description}</p>
            <p className="obj-desc"><b>Rating:</b> {objectData?.rating}</p>
            <p className="obj-desc"><b>Reviews:</b> {objectData?.reviews}</p>
            <p className="obj-desc"><b>Location:</b> {objectData?.location}</p>
            <p className="obj-desc"><b>Opening Hours:</b> {objectData?.openingHours}</p>
            <p className="obj-desc"><b>Ticket Prices:</b> {objectData?.ticketPrice}</p>
        </div>
      </div>
    </div>
  );
}
