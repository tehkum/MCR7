import { useParams } from "react-router";
import "./Homepage.css";
import { useEffect, useState } from "react";
import { useItems } from "../context/ItemContext";
import { Link } from "react-router-dom";
import ContinentCard from "../components/ContinentCard";
import Header from "../components/Header";


export default function AllObjects(){
    const { contid, conId } = useParams();
    const { continentData } = useItems();
    const [ destinationData, setDestinationData ] = useState([]);
    const [ countryname, setCountryName ] = useState("")

    useEffect(()=>{
        setDestinationData(continentData?.find(continent=>+continent?.id === +contid).countries.find(country=>+country.id === +conId).destinations);
        setCountryName(continentData?.find(continent=>+continent?.id === +contid).countries.find(country=>+country.id === +conId).name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[contid]);

    return <div>
        <Header />
    <div className="Continent-sec-1">
    <h2 style={{color: "white"}}>Top Places in {countryname} as your next holiday</h2>
    </div>
    <div className="Continent-sec-2">
      {destinationData?.map((dest) => (
        <div key={dest?.id}>
          <Link to={`/objects/${dest?.id}/${conId}/${contid}`}>
            <ContinentCard name={dest?.name} img={dest?.image} />
          </Link>
        </div>
      ))}
    </div>
  </div>
}