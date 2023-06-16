import { useState } from "react";
import Map from "./components/map/Map";
import Calculator from "./components/calculator/Calculator";

export default function App() {

  const [markers, setMarkers] = useState([])

  const [pointA, setPointA] = useState('')
  const [pointB, setPointB] = useState('')

  return (
    <div className="h-screen">
      <div className="relative h-full">
        <Calculator onCalculate={(markers) => setMarkers(markers)} 
          pointA={pointA} 
          pointB={pointB} 
          setPointA={setPointA}
          setPointB={setPointB}
        />

        <Map markers={markers} setPointA={setPointA} setPointB={setPointB}/>
      </div>
    </div>
  );
}
