import ContinentCard from "../components/ContinentCard";
import { useItems } from "../context/ItemContext";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default function HomePage() {
  const { continentData } = useItems();

  return (
    <div>
      <div className="Continent-sec-1">
        <h1>WELCOME TO TRIP ADVISOR</h1>
        <h2>Top countries for your next holidays</h2>
      </div>
      <div className="Continent-sec-2">
        {continentData?.map((continents) => (
          <div key={continents?.id}>
            <Link to={`/countries/${continents?.id}`}>
              <ContinentCard name={continents?.name} img={continents?.image} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
