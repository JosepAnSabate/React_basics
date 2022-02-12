import React from 'react';
import { useState } from 'react';
import {MapContainer, TileLayer, Marker, useMapEvents, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css"
import { Icon } from "leaflet";

import LocationInfoBox from './LocationInfoBox';


const Map = ({eventData}) => {
  // icon
  const flame = new Icon({
    iconUrl: "/flame.svg",
    iconSize: [55, 55]
  });

  // box info markers
  const [locationInfo, setLocationInfo] = useState(null) // we are passing null as a default value

  // markers
  const markers = eventData.map(ev => {
    if (ev.categories[0].id === 8) {
    let dateBrut = ev.geometries[0].date;
    let dateSplitted = dateBrut.split("T")
    let dateSplittedByCat = dateSplitted[0].split("-")
    // console.log(date);

      //lat 1, long 0
      return  <Marker key={ev.id} position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]} 
         icon={flame}  >
           <Popup>
            <div className='popup-fire'>
              <h3 className='popup'>{ ev.title}</h3> 
              <hr />
              <h4 className='popup'>ID:  {ev.id}</h4>  
              <br />
              <h4 className='popup popup-date'>{dateSplittedByCat[2]}-{dateSplittedByCat[1]}-{dateSplittedByCat[0]}</h4>
            </div> 
        </Popup>
      </Marker>


        //  onClick={() => setLocationInfo({id:ev.id, title: ev.title})}
    }
    return null
  })

  return (
    <div>
<MapContainer center={[42.505, 18.09]} zoom={5}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {/* <Marker position={[42.505, -122.09]} icon={flame}  /> */}
  {markers}
</MapContainer>
{locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

export default Map