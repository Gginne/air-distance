import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from "react-leaflet";

export default function Map({ center }) {

  return center === null ? null : (
    <div className="map__container">
      <MapContainer center={center} zoom={11} zoomControl={false}>
    
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
      </MapContainer>
    </div>
  );
}
