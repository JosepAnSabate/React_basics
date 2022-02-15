import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl';
import './App.css';

function App() {
  const [viewport, setViewPort ] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  const MAPBOX_TOKEN = "pk.eyJ1Ijoiam9zZXBhbnNhYmF0ZSIsImEiOiJja21kejl5bHUxdzhoMnBwaDg0YjJ1bDRxIn0.fVRAXWvmIKHZ-4igiQQeRg";
  return (
    <div>
       <ReactMapGL
        {...viewport} 
        mapboxAccessToken={MAPBOX_TOKEN}  mapStyle="mapbox://styles/mapbox/streets-v9">
        marks here
      </ReactMapGL>
      <h1>hi</h1>
    </div>
  );
}

export default App;
