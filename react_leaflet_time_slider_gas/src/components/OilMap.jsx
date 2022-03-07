import React from 'react'
import {MapContainer, GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./OilMap.css"
import ReactSlider from 'react-slider';

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
        let bilioP = (confirmedText/1000).toFixed(1)
        let dailyP = (confirmedText/365).toFixed(1)
        
        if(confirmedText === "0 - 5"){
            dailyP = 0
            bilioP = "0"

        } 
        
        layer.bindPopup(`
            <h4 class="popup-title">${name}</h4> 
            <hr>
            <p class="popup-quant">${bilioP} Bm3/Y</p>
            <p class="popup-quant">${dailyP} Mm3/D</p>
            `);
    }

  return (
    <MapContainer className="map-container-style" zoom={2.2} center={[30,-30]}> 
     <div className="sidebar">
        <h4 className='title-info-legend'><strong>Annual gas production 2019</strong></h4> 
        <p className='world-info-legend text-info-legend'>Annual World production: <strong>4083 Bm3</strong></p>
        <p className='info-legend-conv text-info-legend center-text'>1 Bm3 = 1,000,000,000 m3</p>
        <p className='text-info-legend center-text'>1 Mm3 =  1,000,000 m3</p>
        
        <div className='bottom-container-info-legend'>
        <p className='source-info-legend'><a href="https://github.com/JosepAnSabate/React-Leaflet-Gas-World-Pruduction">Code</a></p>
            <p className='source-info-legend'>Source: <a href="https://ourworldindata.org/grapher/oil-production-by-country">OurWorldinData</a></p>
        </div>
     </div>     
    <div className='time-slider'>
        
        
    </div>
         <GeoJSON style={mapStyle} data={countries}  onEachFeature={oneEchCountry}  />  
    </MapContainer> )
}

export default OilMap