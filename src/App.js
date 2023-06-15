import { useState } from "react";
import Map from "./components/map/Map";
import Calculator from "./components/calculator/Calculator";

export default function App() {

  const [markers, setMarkers] = useState([])

  return (
    <div className="h-screen">
      <div className="relative h-full">
        <Calculator onCalculate={(markers) => setMarkers(markers)}/>

        <Map markers={markers}/>
      </div>
    </div>
  );
}
