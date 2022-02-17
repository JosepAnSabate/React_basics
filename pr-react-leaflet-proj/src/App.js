import React, {useState} from 'react'
import {MapContainer, Marker,Popup, TileLayer} from "react-leaflet"
import './App.css';
import estacionsMeteoData from './data/estac-met'

function App() {
  
  
  //console.log(estacionsMetoData.features);
  return (
    <div>
      <MapContainer center={[41.505, 1.8]} zoom={9}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* or geogson from react leaflet  */}
        {estacionsMeteoData.features.map(estacio => (
          <Marker key={estacio.properties.codi_estacio} position={[
              estacio.properties.latitud,
              estacio.properties.longitud
              ]} 
          >
          )
         <Popup
            position={[
              estacio.properties.latitud,
              estacio.properties.longitud
          ]} >
              <div>
                <h2>{estacio.properties.nom_estacio}</h2>
                
                <h4>Lat: {estacio.properties.latitud} Long: {estacio.properties.longitud}</h4>
                
              </div>
          </Popup>
          </Marker>
            ))}
      </MapContainer>  
    </div>
  );
}

export default App;
