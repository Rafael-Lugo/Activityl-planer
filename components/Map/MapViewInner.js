"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

//Marker Icon
const DefaultIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapViewInner() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function getActivities() {
      try {
        const response = await fetch("/api/activities");
        const data = await response.json();

        const filtered = data
          .map((activity) => ({
            ...activity,
            latitude: Number(activity.latitude),
            longitude: Number(activity.longitude),
          }))
          .filter(
            (activity) =>
              !isNaN(activity.latitude) && !isNaN(activity.longitude)
          );

        setActivities(filtered);
      } catch (error) {}
    }
    getActivities();
  }, []);

  return (
    <>
      <h1>Map View</h1>
      <MapContainer
        center={[0, 0]}
        zoom={1}
        style={{
          height: "400px",
          width: "65%",
          borderRadius: "12px",
          marginTop: "30px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap"
        />
        {activities.map((activity) => (
          <Marker
            key={activity._id}
            position={[activity.latitude, activity.longitude]}
          >
            <Popup>
              <strong>{activity.title}</strong>
              <br />
              {activity.area}, {activity.country}
              <br />
              <a
                href={`/activities/${activity._id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zur Activity
              </a>
              <br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
