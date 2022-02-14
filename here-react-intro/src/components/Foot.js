import React from 'react'
import './Foot.css'

const Foot = () => {
    const iconPath = process.env.PUBLIC_URL; // from public folder
  return (
    <div className='foot'>
        <h1>Here-React Map</h1>
        <img src={`/${iconPath}logo1.svg`} width='60px' />
    </div>
  )
}

export default Foot