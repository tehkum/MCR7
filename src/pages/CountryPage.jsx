import { useParams } from "react-router";
import "./Homepage.css";
import { useEffect, useState } from "react";
import { useItems } from "../context/ItemContext";
import { Link } from "react-router-dom";
import ContinentCard from "../components/ContinentCard";
import Header from "../components/Header";

export default function CountryPage(){
    const { contid } = useParams();
    const { continentData } = useItems();
    const [ countryData, setCountryData ] = useState([]);

    useEffect(()=>{
        setCountryData(continentData.find(continent=>+continent?.id === +contid).countries);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[contid]);

    return <div>
        <Header />
    <div className="Continent-sec-1">
        <h2 style={{color: "white"}}>Top Countries in asia as your next holiday</h2>
    </div>
    <div className="Continent-sec-2">
      {countryData?.map((country) => (
        <div key={country?.id}>
          <Link to={`/AllObjects/${country?.id}/${contid}`}>
            <ContinentCard name={country?.name} img={country?.image} />
          </Link>
        </div>
      ))}
    </div>
  </div>
}