import React, {useState} from 'react'
import ReactMapGL, {Marker, Source, Layer} from 'react-map-gl';
import './App.css';
import {MAPBOX_TOKEN} from './token.js'
import meteoData from './data/estac-met.js'

function App() {
  const [viewport, setViewport ] = useState({
    latitude: 41.392736,
    longitude: 2.157879,
    zoom: 7
  })
  let data = meteoData.features
  console.log(data);

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 8,
      'circle-color': '#007cbf'
    }
  };

  return (
    <div>
       <ReactMapGL
        {...viewport} 
        mapboxAccessToken={MAPBOX_TOKEN}
         mapStyle="mapbox://styles/mapbox/streets-v9"
         onMove={evt => setViewport(evt.viewport)} 
        >
        <Source id="my-data" type="geojson" data={meteoData}>
          <Layer {...layerStyle} />
          </Source>
        {/* not this use source instead */}
        {/* {meteoData.features.map(meteo => (
          <Marker key={meteo.properties.codi_estacio} 
             latitude={meteo.properties.latitud}
             longitude={meteo.properties.longitud}>
            <div>
              Meteo
            </div>
          </Marker>
        ))
       } */}
        marks here
      </ReactMapGL>
      <h1>hi</h1>
    </div>
  );
}

export default App;
