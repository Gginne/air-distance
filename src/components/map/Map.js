import { MapContainer,TileLayer,ZoomControl,Marker,Popup,Polyline,Tooltip,useMapEvents} from "react-leaflet";

import { useState, useRef, useEffect } from "react";

import L from "leaflet";

function LocationMarker({ setPointA, setPointB }) {
  const [position, setPosition] = useState(null);
  const markerRef = useRef();

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      console.log(e.latlng)
      map.flyTo(e.latlng, map.getZoom());
      if (markerRef.current) markerRef.current.openPopup();
    },
  });
  

  return position === null ? null : (
    <Marker ref={markerRef} position={position}>
      <Popup>
        <b>lat:</b> {position.lat}<br/>
        <b>lng:</b> {position.lng}
        <div className="d-flex mt-2">
          <button className="text-white mx-1 bg-orange-500 hover:bg-orange-700 text-xs py-1 px-2 rounded-xl"
            onClick={() => setPointA(position.lat + "," + position.lng)}>
            Set as Point A
          </button>
          <button className="text-white mx-1 bg-orange-500 hover:bg-orange-700 text-xs py-1 px-2 rounded-xl"
            onClick={() => setPointB(position.lat + "," + position.lng)}>
            Set as Point B
          </button>
        </div>
      </Popup>
    </Marker>
  );
}

export default function Map({ markers, setPointA, setPointB }) {
  const mapRef = useRef();

  useEffect(() => {
    if (markers.length > 0) {
      const leafletMap = mapRef.current;
      const bounds = L.latLngBounds(markers.map((marker) => marker.position));
      leafletMap.fitBounds(bounds);
    }
  }, [markers]);

  return (
    <div className="map__container">
      <MapContainer ref={mapRef} center={[0, 0]} zoom={5} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(({ name, position }, index) => (
          <Marker key={index} position={position}>
            <Popup>
              <b>{name}</b> <br /> 
              <b>lat:</b> {position[0]}<br/>
              <b>lng:</b> {position[1]}
              <div className="d-flex mt-2">
                <button className="text-white mx-1 bg-orange-500 hover:bg-orange-700 text-xs py-1 px-2 rounded-xl"
                  onClick={() => setPointA(position[0] + "," + position[1])}>
                  Set as Point A
                </button>
                <button className="text-white mx-1 bg-orange-500 hover:bg-orange-700 text-xs py-1 px-2 rounded-xl"
                  onClick={() => setPointB(position[0] + "," + position[1])}>
                  Set as Point B
                </button>
              </div>
            </Popup>
          </Marker>
        ))}

        {markers.length === 2 && (
          <>
            <Polyline
              positions={markers.map((marker) => marker.position)}
              color="blue"
            />
            <Tooltip
              permanent
              className="polyline-tooltip"
              direction="center"
              offset={[0, -10]}
            >
              distance
            </Tooltip>
          </>
        )}

        <LocationMarker setPointA={setPointA} setPointB={setPointB}/>

        <ZoomControl position="topright" />
      </MapContainer>
    </div>
  );
}
