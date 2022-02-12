import React from 'react'
import { Icon } from "leaflet";
import './Map.css'
import "leaflet/dist/leaflet.css";


const iconPath = process.env.PUBLIC_URL;

export const Header = () => {

  return (
    <header className='header'>
        <a href="/" className='logo-click'>
        <div className='header-logo'>
            
            <img src={`/${iconPath}flame.svg`} width='60px' />
        <h1 className='header-title'> Wilfire Map</h1>
        </div>
        </a>
         <h2 className='header-source'>source:<a href="https://api.nasa.gov/">NASA Open APIs</a></h2>
    </header>
  )
}
