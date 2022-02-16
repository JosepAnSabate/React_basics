import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {MAPBOX_TOKEN} from '../token.js'

mapboxgl.accessToken =  MAPBOX_TOKEN

const Map = () => {

    const mapContainer = useRef(null);
        const map = useRef(null);
        const [lng, setLng] = useState(1.9157879);
        const [lat, setLat] = useState(41.692736);
        const [zoom, setZoom] = useState(7.4);

        useEffect(() => {
            if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
                container: mapContainer.current, // The container option tells Mapbox GL JS to render the map inside a specific DOM element. 
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: zoom
            });
        });

        // Display the coordinates
        useEffect(() => {
            if (!map.current) return; // wait for map to initialize
            map.current.on('click', () => {
                setLng(map.current.getCenter().lng.toFixed(6));
                setLat(map.current.getCenter().lat.toFixed(6));
                setZoom(map.current.getZoom().toFixed(2));
            });
        });
        // The Mapbox map is initialized within a React Effect hook 


  return (
    <div>
    <div className="sidebar">
    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </div>
   <div ref={mapContainer} className="map-container" />
   </div>
  )
}

export default Map