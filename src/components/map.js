import React, { useState, useEffect, useRef } from "react";
import { MapContainer } from "https://cdn.esm.sh/react-leaflet/MapContainer";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function App() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([0, 0], 2);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        tileSize: 512,
        id: "mapbox/dark-v10",
        zoomOffset: -1,
      }).addTo(mapRef.current);
      // Markers for countries
      const countries = [
        { name: "United States", coordinates: [37.0902, -95.7129] },
        { name: "United Kingdom", coordinates: [55.3781, -3.436] },
        { name: "Australia", coordinates: [-25.2744, 133.7751] }
        // Add more countries as needed
      ];

      countries.forEach(country => {
        L.marker(country.coordinates)
          .addTo(mapRef.current)
          .bindPopup(country.name);
      });
    }
  }, []);

  return <div id="map" style={{ height: "150px", width: "249px " }}></div>;
}
