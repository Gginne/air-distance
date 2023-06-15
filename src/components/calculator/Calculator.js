import {useState} from "react"; 
import AddressLookup from "../address/AddressLookup";

export default function Calculator({onCalculate}) {
  const [pointA, setPointA] = useState('')
  const [pointB, setPointB] = useState('')
  const [distance, setDistance] = useState('N/A')

  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  }


  const handleCalculatation = () => {
    if(pointA === '' || pointB === '') return alert('Please enter both points')

    const [pointA_lat, pointA_lng] = pointA.split(',')
    const [pointB_lat, pointB_lng] = pointB.split(',')

    if(isNaN(pointA_lat) || isNaN(pointA_lng) || isNaN(pointB_lat) || isNaN(pointB_lng)) return alert('Please enter valid points')

    onCalculate([[pointA_lat, pointA_lng], [pointB_lat, pointB_lng]])

    const R = 6371; // Earth's radius in kilometers
  
    // Convert latitude and longitude to radians
    const latARad = toRadians(Number(pointA_lat));
    const lonARad = toRadians(Number(pointA_lng));
    const latBRad = toRadians(Number(pointB_lat));
    const lonBRad = toRadians(Number(pointB_lng));
  
    // Calculate the differences
    const deltaLat = latBRad - latARad;
    const deltaLon = lonBRad - lonARad;
  
    // Apply the haversine formula
    const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(latARad) * Math.cos(latBRad) * Math.sin(deltaLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
  
    setDistance(distance.toFixed(2)+' KM');
  }
  
   
  return (
    <div className="absolute z-50 top-2 left-3 max-w-lg">

      <div className="flex flex-col shadow-md mb-3 p-3 bg-base-500 border-none text-white rounded-lg">
        <h2 className="text-2xl mb-3">
          Distance: <span className="float-right">{distance}</span>
        </h2>
        <hr className="mb-5 bg-base-100" />

        <div className="flex justify-between mb-3">
          <input
            type="text"
            value={pointA}
            onChange={(e) => setPointA(e.target.value)}
            className="bg-base-700 shadow appearance-none rounded w-full p-3 text-gray-300 mx-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Point A (lat,lng)"
          />
          <input
            type="text"
            value={pointB}
            onChange={(e) => setPointB(e.target.value)}
            className="bg-base-700 shadow appearance-none rounded w-full p-3 text-gray-300 mx-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Point B (lat,lng)"
          />
        </div>

        <button class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded" onClick={handleCalculatation}>
          Calculate
        </button>
      </div>

      <div className="flex flex-col shadow-md mb-3 p-3 bg-base-500 border-none text-white rounded">
        <AddressLookup onSelectPointA={(coord) => setPointA(coord)} onSelectPointB={(coord) => setPointB(coord)}/>
      </div>
    </div>
  );
}
