import "./Continentcard.css";

export default function ContinentCard({name, img}){
    return <div className="continent-card">
        <img src={img} alt="..." className="continent-card-img"/>
        <p className="continent-card-name">📍 {name}</p>
    </div>
}