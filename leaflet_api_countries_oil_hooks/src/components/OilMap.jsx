import React from 'react'
import {MapContainer, GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./OilMap.css"

const OilMap = ({countries}) => {

     const mapStyle = {
         fillColor:"white",
         weight: 1,
         color:"black",
         filOpacity: 1,
     };

     // popup
    const oneEchCountry = (country, layer)=>{
        layer.options.fillColor = country.properties.color;
        const name = country.properties.ADMIN;
        const confirmedText = country.properties.confirmedText;
        layer.bindPopup(`
            <h4 class="popup-title">${name}</h4> 
            <p class="popup-quant">${confirmedText} Mbb/Y</p>
            <p class="popup-quant">${(confirmedText/365).toFixed(1)} Mbb/D</p>
            `);
    }

  return (
    <MapContainer className="map-container-style" zoom={2} center={[30,40]}> 
     <div className="sidebar">
        <h4 className='title-info-legend'><strong>Annual oil production 2019</strong></h4> 
        <p className='world-info-legend text-info-legend'>Annual World production: <strong>30629 Mbb</strong></p>
        <p className='info-legend-conv text-info-legend center-text'>1 Mbb = 1,000,000 barrels</p>
        <p className='text-info-legend center-text'>1 barrel =  119.24 liters</p>
        
        <div className='bottom-container-info-legend'>
        <p className='source-info-legend'><a href="https://github.com/JosepAnSabate/React-Leaflet-World-Oil-Production-Deployment">Code</a></p>
            <p className='source-info-legend'>Source: <a href="https://ourworldindata.org/grapher/oil-production-by-country">OurWorldinData</a></p>
        </div>
        </div>     
         <GeoJSON style={mapStyle} data={countries}  onEachFeature={oneEchCountry}  />  
    </MapContainer> )
}

export default OilMap