import { useState } from "react";
import Map from "./components/map/Map";
import Calculator from "./components/calculator/Calculator";

export default function App() {

  const [points, setPoints] = useState([])

  return (
    <div className="h-screen">
      <div className="relative h-full">
        <Calculator onCalculate={(pts) => setPoints(pts)}/>

        <Map markers={points}/>
      </div>
    </div>
  );
}
