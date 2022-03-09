import React from 'react'
import ReactSlider from 'react-slider'

const TimeSlider = () => {
  return (
      
    <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    renderThumb={() => <div>rslider</div>}
/>
  )
}

export default TimeSlider