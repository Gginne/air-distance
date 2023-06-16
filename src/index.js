import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import markerIcon from "leaflet/dist/images/marker-icon.png";

import App from './App';
import L from "leaflet";


L.Marker.prototype.setIcon(L.icon({
  iconUrl:markerIcon
}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


