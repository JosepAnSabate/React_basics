import React from 'react';
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css"
import { Icon } from "leaflet";



const Map = () => {

  const flame = new Icon({
    iconUrl: "/flame.svg",
    iconSize: [55, 55]
  });

  return (
    <div>
<MapContainer center={[42.505, -122.09]} zoom={5}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[42.505, -122.09]} icon={flame}  />
</MapContainer>

    </div>
  )
}

export default Map