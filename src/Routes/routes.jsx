import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";
import ObjectPage from "../pages/ObjectPage";
import AllObjects from "../pages/AllObjects";

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/countries/:contid" element={<CountryPage />}/>
        <Route path="/objects/:objId/:conId/:contid" element={<ObjectPage />}/>
        <Route path="/AllObjects/:conId/:contid" element={<AllObjects />}/>
        {/* <Route path="/" element={<HomePage />}/> */}
    </Routes>
}