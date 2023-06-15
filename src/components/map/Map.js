import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
  Polyline,
  Tooltip,
} from "react-leaflet";

import {useRef, useEffect } from "react";

import L from "leaflet";

export default function Map({ markers }) {
  const mapRef = useRef();

  useEffect(() => {
    if (markers.length > 0) {
      const leafletMap = mapRef.current;
      const bounds = L.latLngBounds(markers.map((marker) => marker.point));
      leafletMap.fitBounds(bounds);
    }
  }, [markers]);

  /*const textPosition = [
    (point[0][0] + point[1][0]) / 2,
    (point[0][1] + point[1][1]) / 2,
  ];*/

  return (
    <div className="map__container">
      <MapContainer ref={mapRef} center={[0, 0]} zoom={5} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(({name, point}, index) => (
          <Marker key={index} position={point}>
            <Popup>
              {name} <br /> lat: {point[0]}, lng: {point[1]}
            </Popup>
          </Marker>
        ))}

        {markers.length === 2 && (
          <>
            <Polyline positions={markers.map(marker => marker.point)} color="blue" />
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

        <ZoomControl position="topright" />
      </MapContainer>
    </div>
  );
}
