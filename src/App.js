import Map from "./components/map/Map";
import Calculator from "./components/calculator/Calculator";

export default function App() {
  
  return (
    <div className="h-screen">
      <div className="relative h-full">
        <Calculator />

        <Map center={[51.505, -0.09]} />
      </div>
    </div>
  );
}