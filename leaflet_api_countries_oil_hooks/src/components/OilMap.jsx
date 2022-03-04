import React from 'react'
import {MapContainer, GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./OilMap.css"

const OilMap = ({countries}) => {

    console.log(countries);
    const mapStyle = {
        fillColor:"white",
        weight: 1,
        color:"black",
        filOpacity: 1,
    };

  return (
    <MapContainer className="map-container-style" zoom={2} center={[30,40]}>
         
         <GeoJSON style={mapStyle} data={countries}  /> 
       
    </MapContainer>  )
}

export default OilMap