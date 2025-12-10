"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {useEffect, useState} from "react"

const DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapViewInner() {
  const [activities, setActivities] = useState([]);



  return (
    <>
      <h1>Map View</h1>
      <MapContainer
        center={[0, 0]}
        zoom={1}
        style={{
          height: "500px",
          width: "65%",
          borderRadius: "12px",
          marginTop: "30px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap"
        />
      </MapContainer>
    </>
  );
}
